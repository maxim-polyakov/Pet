import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    options: {
      urls: ["amqp://rabbitmq:5672"],
      queue: "pets",
      queueOptions: {
        durable: false,
      },
    },
    transport: Transport.RMQ,
  });
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
