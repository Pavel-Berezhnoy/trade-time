import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mark } from './marks.model';
import { MarksService } from './marks.service';
import { MarkModel } from './marks-models.model';
import { MarkModelsService } from './marks-models.service';
import { MarksController } from './marks.controller';
import { ImporterService } from './importer.service';

@Module({
  controllers: [MarksController],
  providers: [MarksService, MarkModelsService, ImporterService],
  imports: [SequelizeModule.forFeature([Mark, MarkModel])],
})
export class MarksModule {}
