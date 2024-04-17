export interface IVisitor {
    id?: number;
    name: string;
    visitDate: Date;
    phone: string;
    email: string;
    reasons: string;
    cpf: string;
    isChristian: boolean;
    churchId?: number;
    church?: any;
}