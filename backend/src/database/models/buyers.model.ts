import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpjs from './cnpj.model';
import { IBuyers } from '../../Interfaces/Buyers/IBuyers';

type BuyersCreationAttributes = Optional<IBuyers, 'id'>;

class Buyers extends Model<IBuyers, BuyersCreationAttributes> implements IBuyers {
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
  public phoneNumber?: string;
  public situation?: string;
  public situationDate?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cnpjId?: number;
  public confirm?: boolean;
  public email?: string;
}

Buyers.init({
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
      model: 'cnpjs',
      key: 'id',
    },
  },
  confirm: DataTypes.BOOLEAN,
  email: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'buyers',
  timestamps: false,
});

Buyers.belongsTo(Cnpjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnpjs.hasMany(Buyers, {
  foreignKey: 'cnpjId',
  as: 'buyers',
});

export default Buyers;
