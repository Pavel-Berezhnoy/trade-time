import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const PORT = Number(process.env.WEBSOCKET_PORT) || 5001;

@WebSocketGateway(PORT, {
  cors: true,
})
export class LotGateway implements OnGatewayInit {
  private logger: Logger = new Logger('WebSocketsGateway');

  afterInit(server: any) {
    this.logger.log(`Websockets has been started on ${PORT} port`);
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribe_lot')
  subscribeOnLot(client: Socket, id: number) {
    console.log('complete');
    client.join(id.toString());
    return id;
  }

  @SubscribeMessage('unsubscribe_lot')
  unsubscribeOnLot(client: Socket, id: number) {
    client.leave(id.toString());
    return id;
  }
}
