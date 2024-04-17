export interface IPrayer {
    id?: number;
    reason: string;
    description: string;
    receiveVisit: boolean;
    receiveCall: boolean;
    postOnWall: boolean;
    active: boolean;
    image?: string;
    churchId?: number;
    church?: any; 
    user?: any; 
    userId?: number; 
}