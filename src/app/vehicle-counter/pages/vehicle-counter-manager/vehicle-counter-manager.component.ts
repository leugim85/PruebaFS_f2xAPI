import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-counter-manager',
  templateUrl: './vehicle-counter-manager.component.html',
  styleUrls: ['./vehicle-counter-manager.component.css']
})
export class VehicleCounterManagerComponent {

  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/auth', 'login'])
  }
}
