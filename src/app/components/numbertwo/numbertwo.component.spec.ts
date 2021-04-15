import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbertwoComponent } from './numbertwo.component';

describe('NumbertwoComponent', () => {
  let component: NumbertwoComponent;
  let fixture: ComponentFixture<NumbertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbertwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
