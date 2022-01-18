import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { VehicleModule } from './vehicle/vehicle.module';
import { LotsModule } from './lots/lots.module';
import { BetsModule } from './bets/bets.module';
import { WebsocketsModule } from './websockets/websockets.module';
import { MarksModule } from './marks/marks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      models: [],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UsersModule,
    AuthModule,
    VehicleModule,
    LotsModule,
    BetsModule,
    WebsocketsModule,
    MarksModule,
  ],
  providers: [AppService],
})
export class AppModule {}
