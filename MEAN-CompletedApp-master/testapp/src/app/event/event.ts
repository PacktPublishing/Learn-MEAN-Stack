export interface IEvent {
    name: string;
    code: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    fee: number;
    rating: number;
    imageUrl: string;
    location: Object;
    capacity: number;
}