import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCounterManagerComponent } from './vehicle-counter-manager.component';

describe('VehicleCounterManagerComponent', () => {
  let component: VehicleCounterManagerComponent;
  let fixture: ComponentFixture<VehicleCounterManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleCounterManagerComponent]
    });
    fixture = TestBed.createComponent(VehicleCounterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
