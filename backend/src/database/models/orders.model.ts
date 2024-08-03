import { DataTypes, Model, Optional } from 'sequelize';
import db from '.';
import Cnpj from './cnpj.model';
import Users from './users.model';
import Buyers from './buyers.model';
import { Provider } from './providers.model';
import { IOrder } from '../../Interfaces/Orders/IOrders';

interface OrderCreationAttributes extends Optional<IOrder, 'id'> {}

export class Order extends Model<IOrder, OrderCreationAttributes> implements IOrder {
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

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
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
      model: Cnpj,
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: 'id',
    },
  },
  buyerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Buyers,
      key: 'id',
    },
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Provider,
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
  tableName: 'orders',
  timestamps: true,
});

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId' });
Order.belongsTo(Users, { foreignKey: 'userId' });
Order.belongsTo(Buyers, { foreignKey: 'buyerId' });
Order.belongsTo(Provider, { foreignKey: 'providerId' });
Cnpj.hasMany(Order, { foreignKey: 'cnpjId' });
Users.hasMany(Order, { foreignKey: 'userId' });
Buyers.hasMany(Order, { foreignKey: 'buyerId' });
Provider.hasMany(Order, { foreignKey: 'providerId' });
