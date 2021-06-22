import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingTripComponent } from './fishing-trip.component';

describe('FishingTripComponent', () => {
  let component: FishingTripComponent;
  let fixture: ComponentFixture<FishingTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
