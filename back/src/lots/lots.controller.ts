import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.decorator';
import { CreateLotDto } from './dto/create-lot.dto';
import { LotsService } from './lots.service';

@Controller('lots')
export class LotsController {
  constructor(private lotsService: LotsService) {}

  @Get('/:id')
  getlotById(@Param('id') id: number) {
    return this.lotsService.getbyId(id);
  }

  @Get()
  getAllLots() {
    return this.lotsService.getAllLots();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createLot(@Body() createLotDto: CreateLotDto, @User() user) {
    return this.lotsService.createLot(createLotDto, user);
  }
}
