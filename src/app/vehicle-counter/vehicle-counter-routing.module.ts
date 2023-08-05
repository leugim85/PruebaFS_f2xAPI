import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleCounterManagerComponent } from './pages/vehicle-counter-manager/vehicle-counter-manager.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleCounterManagerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleCounterRoutingModule { }
