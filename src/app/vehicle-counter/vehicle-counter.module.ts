import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleCounterRoutingModule } from './vehicle-counter-routing.module';
import { VehicleCounterManagerComponent } from './pages/vehicle-counter-manager/vehicle-counter-manager.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    VehicleCounterManagerComponent
  ],
  imports: [
    CommonModule,
    VehicleCounterRoutingModule,
    MaterialModule
  ]
})
export class VehicleCounterModule { }
