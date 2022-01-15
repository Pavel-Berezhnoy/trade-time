import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Lot } from 'src/lots/lots.model';

interface VehicleCreationAttrs {
  lotId: number;
  mark: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
}

@Table({ tableName: 'vehicles', createdAt: false, updatedAt: false })
export class Vehicle extends Model<Vehicle, VehicleCreationAttrs> {
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
  mark: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  mileage: number;
}
