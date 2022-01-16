import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { ApiHideProperty } from '@nestjs/swagger';
import { Lot } from 'src/lots/lots.model';

interface BetCreationAttrs {
  price: number;
  userId: number;
  lotId: number;
}

@Table({ tableName: 'bets', updatedAt: false })
export class Bet extends Model<Bet, BetCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  userId: number;

  @ForeignKey(() => Lot)
  lotId: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ApiHideProperty()
  @BelongsTo(() => User)
  user: User;

  @ApiHideProperty()
  @BelongsTo(() => User)
  lot: Lot;

  @CreatedAt
  createdAt: Date;
}
