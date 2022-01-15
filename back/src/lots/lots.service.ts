import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from 'src/vehicle/vehicle.model';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { Lot } from './lots.model';

@Injectable()
export class LotsService {
  constructor(
    @InjectModel(Lot) private lotRepository: typeof Lot,
    private vehicalService: VehicleService,
  ) {}

  async getAllLots() {
    return await this.lotRepository.findAll({
      include: Vehicle,
    });
  }

  async getbyId(id: number) {
    const lot = await this.lotRepository.findOne({
      where: {
        id,
      },
      include: Vehicle,
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
    const vehical = await this.vehicalService.createVehicle(
      lot.id,
      createLotDto.vehical,
    );
    return await this.lotRepository.findOne({
      where: {
        id: lot.id,
      },
      include: Vehicle,
    });
  }
}
