import { IOrders } from "./IOrders";

export interface IOrdersModel {
  findAllWithAssociations(): Promise<IOrders[]>;
}
