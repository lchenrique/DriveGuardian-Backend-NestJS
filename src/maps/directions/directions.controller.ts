import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from 'src/maps/directions/directions.service';

@Controller('directions')
export class DirectionsController {

    constructor(private directionService: DirectionsService) {

    }

    @Get()
    getDirections(
        @Query("originId") originId: string,
        @Query("destinationId") destinationId: string
    ) {

        return this.directionService.getDirections(originId, destinationId)
    }
}
