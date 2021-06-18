import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtRentalComponent } from './yacht-rental.component';

describe('YachtRentalComponent', () => {
  let component: YachtRentalComponent;
  let fixture: ComponentFixture<YachtRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
