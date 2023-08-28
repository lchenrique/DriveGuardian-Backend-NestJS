import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from 'src/maps/places/places.service';

@Controller('places')
export class PlacesController {
    constructor(private placeService: PlacesService) {

    }

    @Get()
    findPLace(@Query("text") text: string) {

        return this.placeService.findePLace(text)
    }
}
