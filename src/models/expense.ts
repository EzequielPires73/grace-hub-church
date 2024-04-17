export interface IExpense {
    id?: number;
    value: string;
    launchDate: Date | string;
    paymentDate: Date | string;
    description: string;
    observation: string;
    active: boolean;
    categoryId: number;
    category?: any;
    subcategoryId: number;
    subcategory?: any;
    paidForId: number;
    paidFor?: any;
    supplierId: number;
    supplier?: any;
    costCenterId: number;
    costCenter?: any;
    accountId: number;
    account?: any;
    churchId: number;
    church?: any;
}