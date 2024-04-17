import { IUser } from "./users";

export interface IMinistry {
    id?: number;
    name: string;
    description?: string;
    image?: string;
    active: boolean;
    responsible?: IUser;
    responsibleId?: number;
    church?: any;
    churchId?: string;
}