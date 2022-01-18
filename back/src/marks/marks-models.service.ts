import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { MarkModel } from './marks-models.model';

@Injectable()
export class MarkModelsService {
  constructor(
    @InjectModel(MarkModel)
    private markModelsRepository: typeof MarkModel,
  ) {}
  async findById(id: number) {
    const automaker = await this.markModelsRepository.findByPk(id);
    if (automaker) {
      return automaker;
    }
    throw new HttpException('Model not found', HttpStatus.NOT_FOUND);
  }
  async findByName(name: string) {
    return await this.markModelsRepository.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }
  async findOrCreate(markId: number, name: string) {
    return await this.markModelsRepository.findOrCreate({
      where: {
        markId,
        name,
      },
    });
  }
  async bulkCreate(markId: number, names: string[]) {
    console.log(markId, names);
    return await this.markModelsRepository.bulkCreate(
      names.map((name) => ({
        markId,
        name,
      })),
      { ignoreDuplicates: true },
    );
  }
}
