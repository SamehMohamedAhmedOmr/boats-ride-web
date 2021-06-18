import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureReserveComponent } from './feature-reserve.component';

describe('FeatureReserveComponent', () => {
  let component: FeatureReserveComponent;
  let fixture: ComponentFixture<FeatureReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
