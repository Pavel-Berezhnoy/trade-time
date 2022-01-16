import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { LotsModule } from 'src/lots/lots.module';
import { BetsController } from './bets.controller';
import { Bet } from './bets.model';
import { BetsService } from './bets.service';

@Module({
  imports: [SequelizeModule.forFeature([Bet]), LotsModule, AuthModule],
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule {}
