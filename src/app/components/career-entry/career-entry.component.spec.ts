import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerEntryComponent } from './career-entry.component';

describe('CareerEntryComponent', () => {
  let component: CareerEntryComponent;
  let fixture: ComponentFixture<CareerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
