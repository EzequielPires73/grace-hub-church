import { IUser } from "./users";

export interface IFinancilCategory {
    id?: number;
    name: string;
    color: string;
    active: boolean;
    type: string;
    church?: any;
    churchId?: string;
}