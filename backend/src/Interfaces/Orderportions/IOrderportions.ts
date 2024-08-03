export interface IOrderportions {
    id: number;
    nDup: string;
    dVenc: string;
    vDup: string;
    availableToMarket?: boolean;
    createdAt: Date;
    updatedAt: Date;
    orderId?: number;
  }