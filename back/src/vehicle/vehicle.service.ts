import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './vehicle.model';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle) private vehicleRepository: typeof Vehicle,
  ) {}
  async createVehicle(lotId: number, createVehicleDto: CreateVehicleDto) {
    return await this.vehicleRepository.create({ lotId, ...createVehicleDto });
  }
  async findById(id: number) {
    return await this.vehicleRepository.findByPk(id);
  }
}
