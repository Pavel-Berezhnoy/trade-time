import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.model';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [SequelizeModule.forFeature([Vehicle])],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
