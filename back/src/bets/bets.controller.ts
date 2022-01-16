import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { User } from 'src/users/users.decorator';
import { BetsService } from './bets.service';
import CreateBetDto from './dto/create-bet.dto';

@ApiTags('Bets')
@Controller('bets')
export class BetsController {
  constructor(private betsService: BetsService) {}

  @ApiOperation({ summary: 'Сreating a bet' })
  @Auth()
  @Post()
  createBet(@Body() createBetDto: CreateBetDto, @User() user) {
    return this.betsService.createBet(createBetDto, user);
  }
}
