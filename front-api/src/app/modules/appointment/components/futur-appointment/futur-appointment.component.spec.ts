import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturAppointmentComponent } from './futur-appointment.component';

describe('FuturAppointmentComponent', () => {
  let component: FuturAppointmentComponent;
  let fixture: ComponentFixture<FuturAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
