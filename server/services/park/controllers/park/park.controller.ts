import { Controller, Get, Post, Body, Inject } from "@nestjs/common";
import { ParkService } from "./park.service";
import { ParkDto } from "./dto/park.dto";
import { ClientProxy, MessagePattern, Payload } from "@nestjs/microservices";

@Controller("park")
export class ParkController {
  constructor(
    @Inject("RABBIT_MQ_SERVICE") private readonly client: ClientProxy,
    private readonly parkService: ParkService,
  ) {}

  @Get("/pets")
  pets() {
    return this.parkService.findAll();
  }

  @Post("/create_pet")
  @MessagePattern("pets")
  create_pet(@Payload() message: any, @Body() data: any) {
    const dto = new ParkDto();
    console.log("получено сообщение:", message);
    const { name, age, health, hungry, mood, status } = data;
    dto.name = name;
    dto.age = age;
    dto.health = health;
    dto.hungry = hungry;
    dto.mood = mood;
    dto.status = status;
    return this.parkService.create(dto);
  }
}
