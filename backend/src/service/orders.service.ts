import { IOrders } from '../Interfaces/Orders/IOrders';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import OrdersModel from '../model/orders.model';

export default class OrderService {
  constructor(private ordersModel: OrdersModel = new OrdersModel()) {}

  public async getAllOrders(filters: { status?: string; startDate?: Date; endDate?: Date }): Promise<ServiceResponse<IOrders[]>> {
    try {

      const orders = await this.ordersModel.findAllWithAssociations(filters);

      return { status: 'SUCCESSFUL', data: orders };
    } catch (error) {
      console.error('Error in getAllOrders:', error);
      return { status: 'BAD_REQUEST', data: { message: 'Error fetching orders' } };
    }
  }
}
