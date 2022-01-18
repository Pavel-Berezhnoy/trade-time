import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Vehicle } from 'src/vehicle/vehicle.model';
import { ApiHideProperty } from '@nestjs/swagger';
import { Bet } from 'src/bets/bets.model';
import { LotImage } from './lots-images.model';

interface LotCreationAttrs {
  startPrice: number;
  userId: number;
  endTime: Date;
}

@Table({ tableName: 'lots', updatedAt: false })
export class Lot extends Model<Lot, LotCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  startPrice: number;

  @ForeignKey(() => User)
  userId: number;

  @ApiHideProperty()
  @BelongsTo(() => User)
  user: User;

  @Column
  endTime: Date;

  @Column({
    type: DataType.STRING,
    defaultValue: 'не продано',
  })
  status: string;

  @HasMany(() => LotImage)
  imgs: LotImage[];

  @HasMany(() => Bet)
  bets: Bet[];

  @HasMany(() => Vehicle)
  vehicle: Vehicle[];

  @CreatedAt
  createdAt: Date;
}
