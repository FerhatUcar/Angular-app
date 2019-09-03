import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}