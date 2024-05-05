import { IAddress } from "./address";

export interface IUser {
    id?: number,
    avatar?: string,
    birthday: string,
    cpf: string,
    dateBaptism?: string,
    education?: string,
    email: string,
    gender?: string,
    maritalStatus?: string,
    memberSince?: string,
    name: string,
    observations?: string,
    phone?: string,
    position?: string,
    profession?: string,
    rg?: string,
    type: string,
    address?: IAddress[] | IAddress;
    churchId?: string;
    church?: any;
}