import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { User } from 'src/users/users.decorator';
import { CreateLotDto } from './dto/create-lot.dto';
import { Lot } from './lots.model';
import { LotsService } from './lots.service';

@ApiTags('Lots')
@Controller('lots')
export class LotsController {
  constructor(private lotsService: LotsService) {}

  @ApiOperation({ summary: 'Getting a lot by ID' })
  @ApiOkResponse({
    type: Lot,
  })
  @ApiNotFoundResponse({ description: 'Lot not found' })
  @Get('/:id')
  getlotById(@Param('id') id: number) {
    return this.lotsService.getbyId(id);
  }

  @ApiOperation({ summary: 'Getting all lots' })
  @ApiResponse({ status: 200, type: [Lot] })
  @Get()
  getAllLots() {
    return this.lotsService.getAllLots();
  }

  @ApiOperation({ summary: 'Сreating a lot' })
  @ApiResponse({ status: 201, type: Lot })
  @Auth()
  @Post()
  createLot(@Body() createLotDto: CreateLotDto, @User() user): Promise<Lot> {
    return this.lotsService.createLot(createLotDto, user);
  }
}
