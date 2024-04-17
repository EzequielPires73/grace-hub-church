import { IEvent } from "./event";
import { IUser } from "./users";

export interface IEventSchedule {
    id?: number;
    description: string;
    date: string;
    start: string;
    end?: string;
    event?: IEvent;
    eventId?: number;
    participants?: IUser[];
}