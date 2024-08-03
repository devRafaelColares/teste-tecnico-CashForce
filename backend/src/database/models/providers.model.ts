import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpjs from './cnpj.model';

interface IProviders {
  id: number;
  name: string;
  address: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
}

type ProvidersCreationAttributes = Optional<IProviders, 'id'>;

class Providers extends Model<IProviders, ProvidersCreationAttributes> implements IProviders {
  public id!: number;
  public name!: string;
  public address!: string;
  public contactName!: string;
  public contactEmail!: string;
  public contactPhone!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cnpjId?: number;
}

Providers.init({
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
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactPhone: {
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
  cnpjId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cnpjs',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'providers',
  timestamps: false,
});

Providers.belongsTo(Cnpjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnpjs.hasMany(Providers, {
  foreignKey: 'cnpjId',
  as: 'providers',
});

export default Providers;
