import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtVideoComponent } from './yacht-video.component';

describe('YachtVideoComponent', () => {
  let component: YachtVideoComponent;
  let fixture: ComponentFixture<YachtVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachtVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
