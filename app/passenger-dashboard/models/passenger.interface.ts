import { Child } from './child.interface';

export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number,
  // children: Child[] | null
  baggage: string
}
