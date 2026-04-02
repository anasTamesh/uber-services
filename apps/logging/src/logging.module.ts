import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/27017/uber_logging_db'),
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
