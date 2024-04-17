import { IAddress } from "./address";
import { IEventSchedule } from "./event-schedule";

export interface IEvent {
    id?: number;
    name: string;
    active: boolean;
    type: string;
    description?: string;
    information?: string;
    image?: string;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    ministryId: number;
    ministry?: any;
    churchId: number;
    church?: any;
    address?: IAddress;
    eventSchedules?: IEventSchedule[];
    schedules?: IEventSchedule[];
}