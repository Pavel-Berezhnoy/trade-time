import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Lot } from './lots.model';

interface LotImageCreationAttrs {
  uri: string;
  lotId: number;
}

@Table({ tableName: 'imgs', updatedAt: false })
export class LotImage extends Model<LotImage, LotImageCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Lot)
  lotId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  uri: string;

  @CreatedAt
  createdAt: Date;
}
