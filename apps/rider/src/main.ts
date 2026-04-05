import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002,
      },
    },
  );
  // await app.listen(process.env.port ?? 3002);
  await app.listen();
}
bootstrap();
