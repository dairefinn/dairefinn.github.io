import { Component } from '@angular/core';
import { CareerEntryType, CareerEntry, careerEntries } from '../../../data/career';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-career-history',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    CardComponent
  ],
  templateUrl: './career-history.component.html',
  styleUrl: './career-history.component.scss'
})
export class CareerHistoryComponent {
  
  public readonly eCareerEntryType = CareerEntryType;

  careerEntries: CareerEntry[] = careerEntries;

}
