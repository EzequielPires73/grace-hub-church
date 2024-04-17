export interface ISuppliers {
    id?: number;
    name: string;
    document: string;
    phone: string;
    email: string;
    responsible: string;
    active: boolean;
    church?: any;
    churchId?: number;
}