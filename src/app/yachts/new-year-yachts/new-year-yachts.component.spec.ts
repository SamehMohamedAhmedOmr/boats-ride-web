import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearYachtsComponent } from './new-year-yachts.component';

describe('NewYearYachtsComponent', () => {
  let component: NewYearYachtsComponent;
  let fixture: ComponentFixture<NewYearYachtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewYearYachtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewYearYachtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
