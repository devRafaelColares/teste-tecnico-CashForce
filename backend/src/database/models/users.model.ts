import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import { IUser } from '../../Interfaces/Users/IUser';

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

class User extends Model<IUser, UserCreationAttributes> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public phoneNumber?: string;
  public mobile?: string;
  public department?: string;
  public verificationCode?: string;
  public emailChecked?: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cashforceAdm?: boolean;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: DataTypes.STRING,
  mobile: DataTypes.STRING,
  department: DataTypes.STRING,
  verificationCode: DataTypes.STRING,
  emailChecked: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cashforceAdm: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
  },
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: true,
});

export default User;
