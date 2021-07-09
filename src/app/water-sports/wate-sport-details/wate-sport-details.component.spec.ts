import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WateSportDetailsComponent } from './wate-sport-details.component';

describe('WateSportDetailsComponent', () => {
  let component: WateSportDetailsComponent;
  let fixture: ComponentFixture<WateSportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WateSportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WateSportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
