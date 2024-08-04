import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Order from './orders.model';
import { IOrderportions } from '../../Interfaces/Orderportions/IOrderportions';

type OrderportionsCreationAttributes = Optional<IOrderportions, 'id'>;

class Orderportions extends Model<IOrderportions, OrderportionsCreationAttributes> implements IOrderportions {
  public id!: number;
  public nDup!: string;
  public dVenc!: string;
  public vDup!: string;
  public availableToMarket?: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public orderId?: number;
}

Orderportions.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dVenc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableToMarket: DataTypes.BOOLEAN,
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
}, {
  sequelize: db,
  modelName: 'orderportions',
  timestamps: false,
});

Orderportions.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

Order.hasMany(Orderportions, {
  foreignKey: 'orderId',
  as: 'orderportions',
});

export default Orderportions;
