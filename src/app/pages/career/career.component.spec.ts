import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent } from './career.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CareerComponent,
        RouterModule.forChild([])
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
