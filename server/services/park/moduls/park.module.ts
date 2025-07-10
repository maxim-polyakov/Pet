import { Module } from "@nestjs/common";
import { ParkService } from "../services/park.service";
import { SenderService} from "../services/rabbit.service";
import { ParkController } from "../controllers/park.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Park } from "../models/park.model";

@Module({
  imports: [SequelizeModule.forFeature([Park])],
  controllers: [ParkController],
  providers: [ParkService, SenderService],
})
export class ParkModule {}
