import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleCounterRoutingModule } from './vehicle-counter-routing.module';
import { VehicleCounterManagerComponent } from './pages/vehicle-counter-manager/vehicle-counter-manager.component';
import { MaterialModule } from '../material/material.module';
import { CounterReporterComponent } from './components/counter-reporter/counter-reporter.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    VehicleCounterManagerComponent,
    CounterReporterComponent
  ],
  imports: [
    CommonModule,
    VehicleCounterRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class VehicleCounterModule { }
