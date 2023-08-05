import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleCounterManagerComponent } from './pages/vehicle-counter-manager/vehicle-counter-manager.component';
import { CounterReporterComponent } from './components/counter-reporter/counter-reporter.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleCounterManagerComponent,
    children: [
      { path: 'report', component: CounterReporterComponent },
      { path: '**', redirectTo: 'report' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleCounterRoutingModule { }
