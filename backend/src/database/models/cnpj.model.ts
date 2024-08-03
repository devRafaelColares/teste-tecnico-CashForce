import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Buyers from './buyers.model';
import Sponsors from './sponsors.model';
import { Order } from './orders.model';
import { Provider } from './providers.model';
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

Cnpj.hasMany(Buyers, {
  foreignKey: 'cnpjId',
  as: 'buyers',
});

Cnpj.hasMany(Order, {
  foreignKey: 'cnpjId',
  as: 'orders',
});

Cnpj.hasMany(Provider, {
  foreignKey: 'cnpjId',
  as: 'providers',
});

Cnpj.hasMany(Sponsors, {
  foreignKey: 'cnpjId',
  as: 'sponsors',
});

export default Cnpj;
