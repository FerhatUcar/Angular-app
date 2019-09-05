import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent implements OnChanges {
  // Inputs
  // person or passenger as detail
  @Input() detail: Passenger;

  // Outputs
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  public onNameChange(value: string): void {
    this.detail.fullName = value;
  }

  public goToPassenger() {
    this.view.emit(this.detail);
  }

  public toggleEdit() {
    this.editing = !this.editing;
  }

  public onRemove() {
    // if we're in edit mode, commit changes threw the parent and tell it that it has been edited
    if (this.editing) this.edit.emit(this.detail);

    // remove the item
    this.remove.emit(this.detail);
  }

  // life cycle hook, all changes from @Input() inside the ngOnChanges
  // it is because you cannot execute one time code, on every @Input() property change
  // ngOnInit will be called only once on initializing the component after the first ngOnChanges called
  // updates the input when clicking on done
  public ngOnChanges(changes): void {
    if (changes.detail) this.detail = Object.assign({}, changes.detail.currentValue);
  }
}
