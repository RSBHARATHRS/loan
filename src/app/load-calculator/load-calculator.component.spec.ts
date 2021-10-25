import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCalculatorComponent } from './load-calculator.component';

describe('LoadCalculatorComponent', () => {
  let component: LoadCalculatorComponent;
  let fixture: ComponentFixture<LoadCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
