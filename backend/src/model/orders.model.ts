import { Op } from 'sequelize';
import Order from '../database/models/orders.model';
import Buyers from '../database/models/buyers.model';
import Providers from '../database/models/providers.model';
import { IOrders } from '../Interfaces/Orders/IOrders';
import { IOrdersModel } from '../Interfaces/Orders/IOrdersModel';

export default class OrdersModel implements IOrdersModel {
  private model = Order;

  async findAllWithAssociations(filters: { status?: string; startDate?: Date; endDate?: Date } = {}): Promise<IOrders[]> {
    try {
      const where: any = {};

      if (filters.status) {
        where.orderStatusBuyer = filters.status;
      }

      if (filters.startDate && filters.endDate) {
        where.createdAt = {
          [Op.between]: [filters.startDate, filters.endDate],
        };
      }

      const dbData = await this.model.findAll({
        where,
        include: [
          { model: Buyers, as: 'buyer', attributes: ['name'] },
          { model: Providers, as: 'provider', attributes: ['name'] }
        ],
        attributes: ['orderNfId', 'emissionDate', 'value', 'orderStatusBuyer'],
      });


      return dbData.map((order: any) => order.toJSON() as IOrders);
    } catch (error) {
      console.error('Error in findAllWithAssociations:', error);
      throw new Error('Error fetching orders');
    }
  }
}
