import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  onNameChange(value: string): void {
    this.detail.fullName = value;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  onRemove() {
    // if we're in edit mode, commit changes threw the parent and tell it that it has been edited
    if (this.editing) this.edit.emit(this.detail);

    // remove the item
    this.remove.emit(this.detail);
  }
}
