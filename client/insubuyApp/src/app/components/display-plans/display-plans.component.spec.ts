import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlansComponent } from './display-plans.component';

describe('DisplayPlansComponent', () => {
  let component: DisplayPlansComponent;
  let fixture: ComponentFixture<DisplayPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
