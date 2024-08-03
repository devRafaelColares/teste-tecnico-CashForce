import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Buyers from './buyers.model';
import Orders from './orders.model';
import Providers from './providers.model';
import Sponsors from './sponsors.model';

interface ICnpjs {
  id: number;
  cnpj: string;
  companyType: string;
  createdAt: Date;
  updatedAt: Date;
}

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

Cnpj.hasMany(Orders, {
  foreignKey: 'cnpjId',
  as: 'orders',
});

Cnpj.hasMany(Providers, {
  foreignKey: 'cnpjId',
  as: 'providers',
});

Cnpj.hasMany(Sponsors, {
  foreignKey: 'cnpjId',
  as: 'sponsors',
});

export default Cnpj;
