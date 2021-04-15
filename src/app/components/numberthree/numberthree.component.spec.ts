import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberthreeComponent } from './numberthree.component';

describe('NumberthreeComponent', () => {
  let component: NumberthreeComponent;
  let fixture: ComponentFixture<NumberthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
