import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { MarkModel } from './marks-models.model';

interface MarkCreationAttrs {
  name: string;
}

@Table({ tableName: 'marks', createdAt: false, updatedAt: false })
export class Mark extends Model<Mark, MarkCreationAttrs> {
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

  @HasMany(() => MarkModel)
  marModels: MarkModel[];
}
