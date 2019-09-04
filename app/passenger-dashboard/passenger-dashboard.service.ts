import { Passenger } from "./models/passenger.interface";
import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient){}

  public getPassengers(): Observable<Passenger[]> {
    // return array of passengers
    return this.http.get<Passenger[]>(PASSENGER_API);
  }

  public updatePassengers(passenger: Passenger): Observable<any> {
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger);
  }

  public removePassengers(passenger: Passenger): Observable<any> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`);
  }
}
