import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import OrderService from '../service/orders.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public async getOrders(req: Request, res: Response) {
    const filters = {
      status: req.query.status as string,
      startDate: req.query.startDate ? new Date(req.query.startDate as string) : undefined,
      endDate: req.query.endDate ? new Date(req.query.endDate as string) : undefined,
    };

    try {
      const serviceResponse = await this.orderService.getAllOrders(filters);

      res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    } catch (error) {
      console.error('Error in getOrders:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

}
