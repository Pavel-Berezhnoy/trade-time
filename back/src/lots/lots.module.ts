import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { AuthModule } from 'src/auth/auth.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { LotImage } from './lots-images.model';
import { LotsImagesService } from './lots-images.service';
import { LotsController } from './lots.controller';
import { Lot } from './lots.model';
import { LotsService } from './lots.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Lot, LotImage]),
    VehicleModule,
    AuthModule,
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
  ],
  controllers: [LotsController],
  providers: [LotsService, LotsImagesService],
  exports: [LotsService],
})
export class LotsModule {}
