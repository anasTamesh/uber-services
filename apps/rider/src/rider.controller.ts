import { Controller, Get } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  getRiderbyId(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'Anas',
      lastName: 'Tamesh',
      email: 'anas@gmail.com',
    });
  }
}
