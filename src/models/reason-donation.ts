export interface IReasonDonation {
    id?: number;
    name: string;
    category: string;
    description: string;
    active: boolean;
    recurrent: boolean;
    churchId: number;
}