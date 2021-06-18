import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachPopUpComponent } from './seach-pop-up.component';

describe('SeachPopUpComponent', () => {
  let component: SeachPopUpComponent;
  let fixture: ComponentFixture<SeachPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
