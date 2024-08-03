import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpj from './cnpj.model';
import { IProviders } from '../../Interfaces/Providers/IProviders';

interface ProviderCreationAttributes extends Optional<IProviders, 'id'> {}

export class Provider extends Model<IProviders, ProviderCreationAttributes> implements IProviders {
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
  public documents?: string;
  public phoneNumber?: string;
  public situation?: string;
  public situationDate?: Date;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cnpjId?: number;
  public email?: string;
}

Provider.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  documents: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: {
    type: DataTypes.DATE,
    allowNull: true,
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
      model: Cnpj,
      key: 'id',
    },
  },
  email: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'providers',
  timestamps: true,
});
