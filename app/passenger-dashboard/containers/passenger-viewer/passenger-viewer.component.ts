import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

// services
import { PassengerDashboardService } from "../../passenger-dashboard.service";

// interface
import { Passenger } from "../../models/passenger.interface";

//rxjs
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  public passenger: Passenger;

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.route.params
      .switchMap((data: Params) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
