import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerEntrySmallComponent } from './career-entry-small.component';

describe('CareerEntrySmallComponent', () => {
  let component: CareerEntrySmallComponent;
  let fixture: ComponentFixture<CareerEntrySmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerEntrySmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerEntrySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
