import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Buyers from './buyers.model';
import Cnpj from './cnpj.model';
import Providers from './providers.model';
import Users from './users.model';
import { IOrders } from '../../Interfaces/Orders/IOrders';

type OrdersCreationAttributes = Optional<IOrders, 'id'>;

class Orders extends Model<IOrders, OrdersCreationAttributes> implements IOrders {
  public id!: number;
  public orderNfId!: string;
  public orderNumber!: string;
  public orderPath?: string;
  public orderFileName?: string;
  public orderOriginalName?: string;
  public emissionDate?: string;
  public pdfFile?: string;
  public emitedTo!: string;
  public nNf?: string;
  public CTE?: string;
  public value?: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public cnpjId?: number;
  public userId?: number;
  public buyerId?: number;
  public providerId?: number;
  public orderStatusBuyer?: string;
  public orderStatusProvider?: string;
  public deliveryReceipt?: string;
  public cargoPackingList?: string;
  public deliveryCtrc?: string;
}

Orders.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING,
  emissionDate: DataTypes.STRING,
  pdfFile: DataTypes.STRING,
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nNf: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.STRING,
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
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  buyerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'buyers',
      key: 'id',
    },
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'providers',
      key: 'id',
    },
  },
  orderStatusBuyer: DataTypes.STRING,
  orderStatusProvider: DataTypes.STRING,
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'orders',
  timestamps: false,
});

Orders.belongsTo(Cnpj, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Orders.belongsTo(Buyers, {
  foreignKey: 'buyerId',
  as: 'buyer',
});

Orders.belongsTo(Providers, {
  foreignKey: 'providerId',
  as: 'provider',
});

Orders.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

export default Orders;
