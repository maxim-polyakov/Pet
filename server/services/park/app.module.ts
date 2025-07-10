import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ParkModule } from "./moduls/park.module";
//import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from "@nestjs/config";
//import { AppController } from "./app.controller"
//import {ParkService} from "./park/park.service";
import { Park } from "./models/park.model";
//import {AppService} from "./app.service";

@Module({
  imports: [
    SequelizeModule.forFeature([Park]),
    ConfigModule.forRoot({
      isGlobal: true, // makes it available everywhere
    }),
    SequelizeModule.forRoot({
      dialect: "postgres", // Or your database dialect
      uri: process.env.DATABASE_URL, // Replace with your actual URL
      models: [], // Your Sequelize models
      autoLoadModels: true,
      synchronize: true, // Or false, based on your needs
    }),
    ParkModule,
  ],
  // controllers: [AppController],
  // providers: [ParkService, ],
})
export class AppModule {}
