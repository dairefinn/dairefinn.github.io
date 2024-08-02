import { Component } from '@angular/core';
import { CareerEntryType, CareerEntry, careerEntries } from '../../../data/career';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-career-history',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    CardComponent,
    PageWrapperComponent
  ],
  templateUrl: './career-history.component.html',
  styleUrl: './career-history.component.scss'
})
export class CareerHistoryComponent {
  
  public readonly eCareerEntryType = CareerEntryType;

  careerEntries: CareerEntry[] = careerEntries;

  constructor() {
    document.title = 'Daire Finn / Career / History';
  }

}
