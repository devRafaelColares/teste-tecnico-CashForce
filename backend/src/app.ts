import express, { Request, Response } from 'express';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/', ordersRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;