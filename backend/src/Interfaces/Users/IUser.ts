export interface IUser {
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
    mobile?: string;
    department?: string;
    verificationCode?: string;
    emailChecked?: boolean;
    createdAt: Date;
    updatedAt: Date;
    cashforceAdm?: boolean;
  }