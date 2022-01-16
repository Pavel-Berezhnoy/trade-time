import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { User } from 'src/users/users.decorator';
import { CreateLotDto } from './dto/create-lot.dto';
import { LotsService } from './lots.service';

@ApiTags('Lots')
@Controller('lots')
export class LotsController {
  constructor(private lotsService: LotsService) {}

  @ApiOperation({ summary: 'Getting a lot by ID' })
  @ApiNotFoundResponse({ description: 'Lot not found' })
  @Get('/:id')
  getlotById(@Param('id') id: number) {
    return this.lotsService.getbyId(id);
  }

  @ApiOperation({ summary: 'Getting all lots' })
  @Get()
  getAllLots() {
    return this.lotsService.getAllLots();
  }

  @ApiOperation({ summary: 'Сreating a lot' })
  @Auth()
  @Post()
  createLot(@Body() createLotDto: CreateLotDto, @User() user) {
    return this.lotsService.createLot(createLotDto, user);
  }
}
