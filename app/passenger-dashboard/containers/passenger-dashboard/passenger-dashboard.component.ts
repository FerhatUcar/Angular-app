import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService){}

  public ngOnInit(): void {
    // synchronously call to get data from passengers
    this.passengers = this.passengerService.getPassengers();
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
