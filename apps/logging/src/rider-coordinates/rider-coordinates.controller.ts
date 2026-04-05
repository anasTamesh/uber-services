import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private riderCoordinatesService: RiderCoordinatesService) {}
  @Get(':id')
  async getRiderCoordinates(
    @Param()
    params: any
  ) {
    return this.riderCoordinatesService.getRiderCoordinates(params.id);
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    createRiderCoordinateDTO: CreateCoordinatesDTO
  ) {
    return this.riderCoordinatesService.saveRiderCoordinates( createRiderCoordinateDTO );
  }
}
