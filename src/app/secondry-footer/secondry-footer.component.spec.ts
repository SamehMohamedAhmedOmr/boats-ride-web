import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryFooterComponent } from './secondry-footer.component';

describe('SecondryFooterComponent', () => {
  let component: SecondryFooterComponent;
  let fixture: ComponentFixture<SecondryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondryFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
