import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Lot } from '../lots/lots.model';

interface UserCreationAttrs {
  username: string;
  password: string;
}

@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class User extends Model<User, UserCreationAttrs> {
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
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Lot)
  lots: Lot[];
}
