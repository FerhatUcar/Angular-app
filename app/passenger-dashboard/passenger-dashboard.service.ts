import { Passenger } from "./models/passenger.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";


//rxjs
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


// variables
const PASSENGER_API: string = '/api/passengers';


@Injectable()
export class PassengerDashboardService {

  constructor(private http: HttpClient){}

  public getPassengers(): Observable<Passenger[]> {
    // return array of passengers
    return this.http
      .get<Passenger[]>(PASSENGER_API)
      .catch((error: any) => Observable.throwError(error.json));
  }

  public getPassenger(id: number): Observable<any> {
    // return array of passengers
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .catch((error: any) => Observable.throwError(error.json));
  }

  public updatePassengers(passenger: Passenger): Observable<any> {
    let headers = new Headers({'Content-type': 'application/json'});
    let options: any = new RequestOptions({headers: headers});
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .catch((error: any) => Observable.throwError(error.json));
  }

  public removePassengers(passenger: Passenger): Observable<any> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .catch((error: any) => Observable.throwError(error.json));
  }
}
