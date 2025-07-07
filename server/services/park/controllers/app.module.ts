import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ParkModule } from "./park/park.module";
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
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
})
export class AppModule {}
