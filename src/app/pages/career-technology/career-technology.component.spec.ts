import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTechnologyComponent } from './career-technology.component';

describe('CareerTechnologyComponent', () => {
  let component: CareerTechnologyComponent;
  let fixture: ComponentFixture<CareerTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerTechnologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
