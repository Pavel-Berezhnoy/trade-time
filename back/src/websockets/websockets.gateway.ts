import { Logger, UseFilters, WsExceptionFilter } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LotsService } from 'src/lots/lots.service';

const PORT = Number(process.env.WEBSOCKET_PORT) || 5001;

@WebSocketGateway(PORT, {
  cors: true,
})
export class LotGateway implements OnGatewayInit { 
  constructor (private lotsService: LotsService) {} 
  private logger: Logger = new Logger('WebSocketsGateway');

  afterInit(server: any) {
    this.logger.log(`Websockets has been started on ${PORT} port`);
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribe_lot')
  async subscribeOnLot(client: Socket, id: number) {
    try {
      client.join(id.toString());
      return await this.lotsService.getbyId(id);
    } catch (error) {
      throw new WsException(error.message)
    }
  }

  @SubscribeMessage('unsubscribe_lot')
  unsubscribeOnLot(client: Socket, id: number) {
    client.leave(id.toString());
    return id;
  }
}
