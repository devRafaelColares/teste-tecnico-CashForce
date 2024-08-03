import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpjs from './cnpj.model';
import Offers from './offers.model';

interface ISponsors {
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

type SponsorsCreationAttributes = Optional<ISponsors, 'id'>;

class Sponsors extends Model<ISponsors, SponsorsCreationAttributes> implements ISponsors {
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

Sponsors.init({
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
  modelName: 'sponsors',
  timestamps: false,
});

Sponsors.belongsTo(Cnpjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnpjs.hasMany(Sponsors, {
  foreignKey: 'cnpjId',
  as: 'sponsors',
});

Sponsors.hasMany(Offers, {
  foreignKey: 'sponsorId',
  as: 'offers',
});

export default Sponsors;
