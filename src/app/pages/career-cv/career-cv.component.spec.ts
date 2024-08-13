import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCvComponent } from './career-cv.component';

describe('CareerCvComponent', () => {
  let component: CareerCvComponent;
  let fixture: ComponentFixture<CareerCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
