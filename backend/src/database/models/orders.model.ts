import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Buyers from './buyers.model';
import Cnjs from './cnpj.model';
import Offers from './offers.model';
import Orderportions from './orderportions.model';

interface IOrders {
  id: number;
  orderNumber: string;
  orderDate: Date;
  totalAmount: number;
  paymentStatus: string;
  createdAt: Date;
  updatedAt: Date;
  buyerId?: number;
  cnpjId?: number;
}

type OrdersCreationAttributes = Optional<IOrders, 'id'>;

class Orders extends Model<IOrders, OrdersCreationAttributes> implements IOrders {
  public id!: number;
  public orderNumber!: string;
  public orderDate!: Date;
  public totalAmount!: number;
  public paymentStatus!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public buyerId?: number;
  public cnpjId?: number;
}

Orders.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentStatus: {
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
  buyerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'buyers',
      key: 'id',
    },
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
  modelName: 'orders',
  timestamps: false,
});

Orders.belongsTo(Buyers, {
  foreignKey: 'buyerId',
  as: 'buyer',
});

Buyers.hasMany(Orders, {
  foreignKey: 'buyerId',
  as: 'orders',
});

Orders.belongsTo(Cnjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnjs.hasMany(Orders, {
  foreignKey: 'cnpjId',
  as: 'orders',
});

Orders.hasMany(Offers, {
  foreignKey: 'orderId',
  as: 'offers',
});

Orders.hasMany(Orderportions, {
  foreignKey: 'orderId',
  as: 'orderportions',
});

export default Orders;
