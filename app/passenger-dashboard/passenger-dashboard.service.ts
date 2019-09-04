import { Passenger } from "./models/passenger.interface";
import { HttpClient} from "@angular/common/http";

export class PassengerDashboardService {
  constructor(http: HttpClient){}

  public getPassengers(): Passenger[] {

    // return array of passengers
    return [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: 'Ted',
            age: 12
          }, {
            name: 'Chloe',
            age: 7
          }
        ]
      }, {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 149606000000,
        children: null
      }, {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: 148841280000,
        children: [
          {
            name: 'Jessica',
            age: 13
          }
        ]
      }, {
        id: 5,
        fullName: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      },
    ]
  }
}
