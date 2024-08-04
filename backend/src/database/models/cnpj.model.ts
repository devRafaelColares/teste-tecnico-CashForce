import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import { ICnpjs } from '../../Interfaces/Cnpjs/ICnpjs';

type CnpjCreationAttributes = Optional<ICnpjs, 'id'>;

class Cnpj extends Model<ICnpjs, CnpjCreationAttributes> implements ICnpjs {
  public id!: number;
  public cnpj!: string;
  public companyType!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false,
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
  modelName: 'cnpjs',
  timestamps: false,
});


export default Cnpj;
