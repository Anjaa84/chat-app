import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebSocketGateway1 } from './websocket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [WebSocketGateway1],
})
export class AppModule {}
