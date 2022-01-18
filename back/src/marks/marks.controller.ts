import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMarkModelDto } from './dto/create-mark-model.dto';
import { ImporterService } from './importer.service';

@ApiTags('Marks')
@Controller('marks')
export class MarksController {
  constructor(private importerService: ImporterService) {}

  @Post('/import')
  async import(@Body() createMarkModelDto: CreateMarkModelDto) {
    await this.importerService.import(createMarkModelDto);
    return HttpStatus.OK;
  }
}
