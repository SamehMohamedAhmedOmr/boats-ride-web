import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmoinailsComponent } from './testmoinails.component';

describe('TestmoinailsComponent', () => {
  let component: TestmoinailsComponent;
  let fixture: ComponentFixture<TestmoinailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmoinailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmoinailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
