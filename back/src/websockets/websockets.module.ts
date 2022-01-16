import { Module } from '@nestjs/common';
import { LotGateway } from './websockets.gateway';
import { LotGatewayService } from './websockets.service';

@Module({
  providers: [LotGateway, LotGatewayService],
  exports: [LotGatewayService],
})
export class WebsocketsModule {}
