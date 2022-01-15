import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { LotsController } from './lots.controller';
import { Lot } from './lots.model';
import { LotsService } from './lots.service';

@Module({
  imports: [SequelizeModule.forFeature([Lot]), VehicleModule, AuthModule],
  controllers: [LotsController],
  providers: [LotsService],
})
export class LotsModule {}
