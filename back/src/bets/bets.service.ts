import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as moment from 'moment';
import { LotsService } from 'src/lots/lots.service';
import { LotGatewayService } from 'src/websockets/websockets.service';
import { Bet } from './bets.model';
import CreateBetDto from './dto/create-bet.dto';

@Injectable()
export class BetsService {
  constructor(
    @InjectModel(Bet) private betRepository: typeof Bet,
    private lotsService: LotsService,
    private lotGatewayService: LotGatewayService,
  ) {}
  async createBet(createBetDto: CreateBetDto, user) {
    await this.validateBet(createBetDto);
    const bet = await this.betRepository.create({
      ...createBetDto,
      userId: user.id,
    });
    await this.lotGatewayService.emitNewBet(bet);
    return bet;
  }

  private async validateBet(createBetDto: CreateBetDto) {
    const lot = await this.lotsService.getbyId(createBetDto.lotId);

    if (moment(lot.endTime) < moment()) {
      throw new HttpException(
        'Ставки запрещены после окончания аукциона',
        HttpStatus.CONFLICT,
      );
    }
    const lastBet = await this.findLast();
    const lastPrice = lastBet ? lastBet.price : lot.startPrice;

    if (lastPrice >= createBetDto.price) {
      throw new HttpException(
        'Ставки должны быть больше предыдущих',
        HttpStatus.CONFLICT,
      );
    }
    return true;
  }

  async findById(id: number) {
    return await this.betRepository.findByPk(id);
  }

  async findLast() {
    return await this.betRepository.findOne({
      order: [['createdAt', 'DESC']],
    });
  }
}
