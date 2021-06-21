import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDestinationComponent } from './main-destination.component';

describe('MainDestinationComponent', () => {
  let component: MainDestinationComponent;
  let fixture: ComponentFixture<MainDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
