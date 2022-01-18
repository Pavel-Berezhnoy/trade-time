import {
  Column,
  DataType,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Mark } from './marks.model';

interface MarkModelCreationAttrs {
  name: string;
}

@Table({ tableName: 'mark-models', createdAt: false, updatedAt: false })
export class MarkModel extends Model<MarkModel, MarkModelCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Mark)
  markId: number;

  @BelongsTo(() => Mark)
  mark: Mark;
}
