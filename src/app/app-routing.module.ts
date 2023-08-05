import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'vehicles-reporter',
    loadChildren: () => import('./vehicle-counter/vehicle-counter.module').then( m => m.VehicleCounterModule ),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'veicles-reporter',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'veicles-reporter',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
