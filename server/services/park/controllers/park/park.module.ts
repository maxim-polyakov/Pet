import { Module } from "@nestjs/common";
import { ParkService } from "./park.service";
import { ParkController } from "./park.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Park } from "../models/park.model";

@Module({
  imports: [SequelizeModule.forFeature([Park])],
  controllers: [ParkController],
  providers: [ParkService],
})
export class ParkModule {}
