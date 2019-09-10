import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from "../../passenger-dashboard.service";


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ){}

  public ngOnInit(): void {
    // synchronously call to get data from passengers
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => this.passengers = data)
  }

  // edit function
  // event is an object of a Passenger type
  public handleEdit(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {

          // it detects if we are in the current passenger
          // if it is, fire immutable operation
          // takes original passenger object and merges latest changes of the event in
          if (passenger.id === event.id) passenger = Object.assign({}, passenger, event);

          return passenger;
        })
      });
  }

  // remove function
  // event is an object of a Passenger type
  public handleRemove(event: Passenger) {
    this.passengerService
      .removePassengers(event)
      .subscribe((data: Passenger) => {
        // checking if event id is not equal to passenger id
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
      })
  }

  public handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]).then(r => {});
  }
}
