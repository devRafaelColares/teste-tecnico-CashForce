import { Router, Request, Response } from 'express';
import OrderController from '../controller/orders.contoller';

const orderController = new OrderController();
const router = Router();

router.get('/orders', (req: Request, res: Response) => orderController.getOrders(req, res));

export default router;
