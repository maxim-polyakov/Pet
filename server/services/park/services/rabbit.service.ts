import { Injectable, OnModuleInit } from '@nestjs/common';
import { connect } from 'amqplib';
import {ParkDto} from "../dto/park.dto";
import {ParkService} from "./park.service";

@Injectable()
export class SenderService implements OnModuleInit {
    private channel;
    private readonly queuename = 'pets';
    constructor(private readonly parkService: ParkService) {}

    async onModuleInit() {
        const connection = await connect('amqp://rabbitmq');
        this.channel = await connection.createChannel();
        await this.channel.assertQueue(this.queuename, { durable: true });
    }


    async sendMessage(message: any) {
        const msgbuffer = Buffer.from(JSON.stringify(message));
        await this.parkService.deleteall()
        await this.channel.sendToQueue(this.queuename, msgbuffer);
        console.log('message sent:', message);
    }

    async recieveMessage() {
        let msg;
        do {
            msg = await this.channel.get(this.queuename, { noack: false });
            console.log(msg)
            if (msg &&  msg.fields.deliveryTag) {
                await this.channel.ack(msg);
                msg = JSON.parse(msg.content.toString());
                console.log(msg)

                const dto = new ParkDto();
                for(let i = 0; i < msg.length; i++) {
                    dto.name = msg[i].name;
                    dto.age = msg[i].age;
                    dto.health = msg[i].health;
                    dto.hungry = msg[i].hungry;
                    dto.mood = msg[i].mood;
                    dto.status = msg[i].status;
                    await this.parkService.create(dto);
                }
            }
        } while (msg);
    }
}