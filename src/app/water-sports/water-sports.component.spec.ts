import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSportsComponent } from './water-sports.component';

describe('WaterSportsComponent', () => {
  let component: WaterSportsComponent;
  let fixture: ComponentFixture<WaterSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
