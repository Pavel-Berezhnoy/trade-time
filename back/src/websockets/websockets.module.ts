import { Module } from '@nestjs/common';
import { LotsModule } from 'src/lots/lots.module';
import { LotGateway } from './websockets.gateway';
import { LotGatewayService } from './websockets.service';

@Module({
  providers: [LotGateway, LotGatewayService],
  exports: [LotGatewayService],
  imports: [LotsModule],
})
export class WebsocketsModule {}
