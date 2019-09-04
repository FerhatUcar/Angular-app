import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];

  constructor(){}

  public ngOnInit(): void {
    // data with passengers information
    this.passengers = [
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

  // edit function
  // event is an object of a Passenger type
  public handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {

      // it detects if we are in the current passenger
      // if it is, fire immutable operation
      // takes original passenger object and merges latest changes of the event in
      if (passenger.id === event.id) passenger = Object.assign({}, passenger, event);

      return passenger;
    })
  }

  // remove function
  // event is an object of a Passenger type
  public handleRemove(event: Passenger) {
    // checking if event id is not equal to passenger id
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }
}
