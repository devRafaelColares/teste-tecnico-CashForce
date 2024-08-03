import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpj from './cnpj.model';
import { ISponosor } from '../../Interfaces/Sponsors/ISponsor';

interface SponsorCreationAttributes extends Optional<ISponosor, 'id'> {}

export class Sponsor extends Model<ISponosor, SponsorCreationAttributes> implements ISponosor {
  public id!: number;
  public name!: string;
  public tradingName?: string;
  public cashforceTax?: string;
  public responsibleName?: string;
  public responsibleEmail?: string;
  public responsiblePosition?: string;
  public responsiblePhone?: string;
  public responsibleMobile?: string;
  public website?: string;
  public postalCode?: string;
  public address?: string;
  public number?: string;
  public complement?: string;
  public neighborhood?: string;
  public city?: string;
  public state?: string;
  public bank?: string;
  public bankAgency?: string;
  public account?: string;
  public phoneNumber?: string;
  public situation?: string;
  public situationDate?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cnpjId?: number;
  public email?: string;
}

Sponsor.init({
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
  tradingName: DataTypes.STRING,
  cashforceTax: DataTypes.STRING,
  responsibleName: DataTypes.STRING,
  responsibleEmail: DataTypes.STRING,
  responsiblePosition: DataTypes.STRING,
  responsiblePhone: DataTypes.STRING,
  responsibleMobile: DataTypes.STRING,
  website: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  address: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  bank: DataTypes.STRING,
  bankAgency: DataTypes.STRING,
  account: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.STRING,
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
      model: Cnpj,
      key: 'id',
    },
  },
  email: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'sponsors',
  timestamps: true,
});

Sponsor.belongsTo(Cnpj, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnpj.hasMany(Sponsor, {
  foreignKey: 'cnpjId',
  as: 'sponsors',
});

export default Sponsor;
