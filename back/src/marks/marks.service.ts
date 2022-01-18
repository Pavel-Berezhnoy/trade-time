import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Mark } from './marks.model';

@Injectable()
export class MarksService {
  constructor(@InjectModel(Mark) private marksRepository: typeof Mark) {}
  async findById(id: number) {
    const automaker = await this.marksRepository.findByPk(id);
    if (automaker) {
      return automaker;
    }
    throw new HttpException('Automaker not found', HttpStatus.NOT_FOUND);
  }
  async findByName(name: string) {
    return await this.marksRepository.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }
  async findOrCreate(name: string) {
    return await this.marksRepository.findOrCreate({
      where: {
        name,
      },
    });
  }
}
