import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MemoryStoredFile } from 'nestjs-form-data';
import { LotImage } from './lots-images.model';
import { promises as fs } from 'fs';
import { uuid } from 'uuidv4';
import * as path from 'path';

@Injectable()
export class LotsImagesService {
  constructor(
    @InjectModel(LotImage) private imageRepository: typeof LotImage,
  ) {}

  async save(lotId: number, image: MemoryStoredFile) {
    const fileName = `${uuid()}${path.extname(image.originalName)}`;
    const filePath = `public/images/${fileName}`;
    await fs.writeFile(filePath, image.buffer);
    return await this.imageRepository.create({
      uri: fileName,
      lotId,
    });
  }
}
