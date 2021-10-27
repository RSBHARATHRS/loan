import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMICalculatorComponent } from './emi-calculator.component';

describe('EMICalculatorComponent', () => {
  let component: EMICalculatorComponent;
  let fixture: ComponentFixture<EMICalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMICalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMICalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
