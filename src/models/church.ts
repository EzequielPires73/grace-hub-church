import { IAddress } from "./address";

export interface IChurch {
    id?: string;
    name: string;
    email: string;
    password?: string;
    phone: string;
    instagram?: string;
    youtube?: string;
    facebook?: string;
    description?: string;
    address?: IAddress;
    cnpj?: string;
    churchId?: string;
    history?: string;
    mission?: string;
    values?: string;
    vision?: string;
    logo?: string;
    banner?: string;
    active: boolean;
}