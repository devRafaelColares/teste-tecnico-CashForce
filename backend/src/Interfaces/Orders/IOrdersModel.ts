import { IOrder } from "./IOrders"

export interface IOrdersModel {
  findAll(): Promise<IOrder[]>,
  findByPk(id: number): Promise<IOrder | null>,
  create(orderData: {
    cnpjId: number,
    userId: number,
    buyerId: number,
    providerId: number,
    status: number
  }): Promise<IOrder>,
  update(id: number, updatedData: {
    cnpjId?: number,
    userId?: number,
    buyerId?: number,
    providerId?: number,
    status?: number
  }): Promise<boolean>,
  destroy(id: number): Promise<boolean>
}
