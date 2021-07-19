import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSportBookingFormComponent } from './water-sport-booking-form.component';

describe('WaterSportBookingFormComponent', () => {
  let component: WaterSportBookingFormComponent;
  let fixture: ComponentFixture<WaterSportBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterSportBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterSportBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
