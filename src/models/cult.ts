export interface ICult {
    id?: number;
    title: string;
    description: string;
    image?: string;
    pushNotification: boolean;
    live: boolean;
    active: boolean;
    recurrent: boolean;
    date?: Date | string;
    churchId: number;
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}