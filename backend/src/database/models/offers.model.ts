import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Sponsors from './sponsors.model';
import { Order } from './orders.model';
import { IOffers } from '../../Interfaces/Offers/IOffers';

type OffersCreationAttributes = Optional<IOffers, 'id'>;

class Offers extends Model<IOffers, OffersCreationAttributes> implements IOffers {
  public id!: number;
  public tax!: string;
  public tariff!: string;
  public adValorem!: string;
  public float!: string;
  public iof!: string;
  public expiresIn!: Date;
  public paymentStatusSponsor?: boolean;
  public paymentStatusProvider?: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId?: number;
  public sponsorId?: number;
}

Offers.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentStatusSponsor: DataTypes.BOOLEAN,
  paymentStatusProvider: DataTypes.BOOLEAN,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'orders',
      key: 'id',
    },
  },
  sponsorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'sponsors',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'offers',
  timestamps: false,
});

Offers.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

Order.hasMany(Offers, {
  foreignKey: 'orderId',
  as: 'offers',
});

Offers.belongsTo(Sponsors, {
  foreignKey: 'sponsorId',
  as: 'sponsor',
});

Sponsors.hasMany(Offers, {
  foreignKey: 'sponsorId',
  as: 'offers',
});

export default Offers;
