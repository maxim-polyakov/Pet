import { Controller, Get, Post, Body } from "@nestjs/common";
import { ParkService } from "../services/park.service";
import { SenderService } from "../services/rabbit.service";
import { Injectable } from '@nestjs/common';

@Controller("park")
@Injectable()
export class ParkController {
  constructor(private readonly parkService: ParkService,
              private readonly senderService: SenderService,) {}

  @Get("/pets")
  pets() {
    return this.parkService.findAll();
  }
  @Post("/sendpet")
  async send(){
    const pets = await this.parkService.findAll()
    return await this.senderService.sendMessage(pets)

  }

  @Post("/recieve")
  async recieve(){
    return await this.senderService.recieveMessage()

  }
}
