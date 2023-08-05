import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReporterComponent } from './counter-reporter.component';

describe('CounterReporterComponent', () => {
  let component: CounterReporterComponent;
  let fixture: ComponentFixture<CounterReporterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterReporterComponent]
    });
    fixture = TestBed.createComponent(CounterReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
