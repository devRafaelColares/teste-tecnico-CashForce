import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';

interface IUsers {
  id: number;
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

type UsersCreationAttributes = Optional<IUsers, 'id'>;

class Users extends Model<IUsers, UsersCreationAttributes> implements IUsers {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;
