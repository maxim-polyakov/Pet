import { Clinic } from '../../models/clinic.js';
import amqp from 'amqplib';
import parseJson, {JSONError} from 'parse-json';

class Url {

    async heal(req, res, next) {
        try {
            const queue = 'pets';
            let messages = []
            const conn = await amqp.connect('amqp://rabbitmq');
            const ch = await conn.createChannel();

            let message
            do {
                message = await ch.get(queue, { noack: false });
                if (message) {
                    message = JSON.parse(message.content.toString());
                    messages.push(message);
                }

            } while (message);



            for (let i =0; i< message.length; i++) {
                await Clinic.create({
                    name: message[i].name,
                    age: message[i].age,
                    health: message[i].health,
                    hungry: message[i].hungry,
                    mood: message[i].mood,
                    status: message[i].status
                });
            }
            await ch.close();
            await conn.close();

            return res.json(messages);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
            return res.json(error)
        }
    }

}

export default new Url();