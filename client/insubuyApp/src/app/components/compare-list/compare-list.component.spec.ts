import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareListComponent } from './compare-list.component';

describe('CompareListComponent', () => {
  let component: CompareListComponent;
  let fixture: ComponentFixture<CompareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
