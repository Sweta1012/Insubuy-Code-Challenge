import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePlansComponent } from './compare-plans.component';

describe('ComparePlansComponent', () => {
  let component: ComparePlansComponent;
  let fixture: ComponentFixture<ComparePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
