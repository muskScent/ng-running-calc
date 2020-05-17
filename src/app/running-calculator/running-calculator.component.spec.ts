import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningCalculatorComponent } from './running-calculator.component';

describe('RunningCalculatorComponent', () => {
  let component: RunningCalculatorComponent;
  let fixture: ComponentFixture<RunningCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
