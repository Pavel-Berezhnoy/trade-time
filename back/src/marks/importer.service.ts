import { Injectable } from '@nestjs/common';
import { CreateMarkModelDto } from './dto/create-mark-model.dto';
import { MarkModelsService } from './marks-models.service';
import { Mark } from './marks.model';
import { MarksService } from './marks.service';

@Injectable()
export class ImporterService {
  constructor(
    private marksService: MarksService,
    private markModelsService: MarkModelsService,
  ) {}

  async import(createMarkModelDto: CreateMarkModelDto) {
    for (const key in createMarkModelDto) {
      const [mark] = await this.marksService.findOrCreate(key);
      await this.markModelsService.bulkCreate(mark.id, createMarkModelDto[key]);
    }
  }
}
