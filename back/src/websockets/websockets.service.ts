import { Injectable } from '@nestjs/common';
import { Bet } from 'src/bets/bets.model';
import { LotGateway } from './websockets.gateway';

@Injectable()
export class LotGatewayService {
  constructor(private lotGateway: LotGateway) {}

  async emitNewBet(bet: Bet) {
    await this.lotGateway.server.to(`${bet.lotId}`).emit('new_bet', bet);
  }
}
