import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainYachtRentalComponent } from './main-yacht-rental.component';

describe('MainYachtRentalComponent', () => {
  let component: MainYachtRentalComponent;
  let fixture: ComponentFixture<MainYachtRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainYachtRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainYachtRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
