import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-count',
  styleUrls: ['passenger-count.component.scss'],
  templateUrl: 'passenger-count.component.html'
})
export class PassengerCountComponent {
  // bind items from input or element to passengers interface
  @Input() items: Passenger[];

 checkedInCount(): number {
   // return if there's no items available
   if (!this.items) return;

   // return numbers of passengers that are checked in
   return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
 }
}
