import { IOrdersModel } from '../Interfaces/Orders/IOrdersModel';
import CNPJ from '../database/models/cnpj.model';
import User from '../database/models/users.model';
import Buyer from '../database/models/buyers.model';
import { Provider } from '../database/models/providers.model';
import { IOrder } from '../Interfaces/Orders/IOrders';

export default class OrdersModel implements IOrdersModel {
  private model = OrdersModel;

  public async findAll(): Promise<IOrder[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: CNPJ, as: 'cnpj' },
        { model: User, as: 'user' },
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'provider' }
      ]
    });
    return dbData as unknown as IOrder[];
  }

  public async findByPk(id: number): Promise<IOrder | null> {
    const order = await this.model.findByPk(id, {
      include: [
        { model: CNPJ, as: 'cnpj' },
        { model: User, as: 'user' },
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'provider' }
      ]
    });
    return order as IOrder | null;
  }

  public async create(orderData: {
    cnpjId: number,
    userId: number,
    buyerId: number,
    providerId: number,
    status: number
  }): Promise<IOrder> {
    const newOrder = await this.model.create(orderData);
    return newOrder as unknown as IOrder;
  }

  public async update(id: number, updatedData: {
    cnpjId?: number,
    userId?: number,
    buyerId?: number,
    providerId?: number,
    status?: number
  }): Promise<boolean> {
    const [updated] = await this.model.update(updatedData, {
      where: { id },
    });
    return updated > 0;
  }

  public async destroy(id: number): Promise<boolean> {
    const deleted = await this.model.destroy({
      where: { id },
    });
    return deleted > 0;
  }
}
