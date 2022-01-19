import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bet } from 'src/bets/bets.model';
import { User } from 'src/users/users.model';
import { Vehicle } from 'src/vehicle/vehicle.model';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { LotImage } from './lots-images.model';
import { LotsImagesService } from './lots-images.service';
import { Lot } from './lots.model';

@Injectable()
export class LotsService {
  constructor(
    @InjectModel(Lot) private lotRepository: typeof Lot,
    private vehicalService: VehicleService,
    private lotsImagesService: LotsImagesService,
  ) {}

  async getAllLots() {
    return await this.lotRepository.findAll({
      include: [Vehicle, Bet, User],
    });
  }

  async getbyId(id: number) {
    const lot = await this.lotRepository.findOne({
      where: {
        id,
      },
      include: [Vehicle, Bet, User, LotImage],
    });
    if (lot) {
      return lot;
    }
    throw new HttpException('Lot not found', HttpStatus.NOT_FOUND);
  }

  async createLot(createLotDto: CreateLotDto, user) {
    const lot = await this.lotRepository.create({
      userId: user.id,
      endTime: createLotDto.endTime,
      startPrice: createLotDto.startPrice,
    });
    await this.vehicalService.createVehicle(lot.id, createLotDto);
    for (const image of createLotDto.images) {
      await this.lotsImagesService.create(lot.id, image);
    }
    return this.getbyId(lot.id);
  }
}
