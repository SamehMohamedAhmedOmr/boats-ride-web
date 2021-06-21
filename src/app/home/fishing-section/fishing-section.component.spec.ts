import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingSectionComponent } from './fishing-section.component';

describe('FishingSectionComponent', () => {
  let component: FishingSectionComponent;
  let fixture: ComponentFixture<FishingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
