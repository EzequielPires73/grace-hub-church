import { IUser } from "./users";

export interface IAccount {
    id?: number;
    description: string;
    bank: string;
    type: string;
    initialValue: string;
    agency: number;
    account: number;
    digit: number;
    church?: any;
    churchId?: string;
}