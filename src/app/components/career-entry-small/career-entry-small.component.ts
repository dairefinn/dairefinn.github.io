import { Component, Input } from '@angular/core';
import { CareerEntry, CareerEntryType } from '../../../data/career';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-career-entry-small',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './career-entry-small.component.html',
  styleUrl: './career-entry-small.component.scss'
})
export class CareerEntrySmallComponent {

  public readonly eCareerEntryType = CareerEntryType;

  @Input() careerEntry?: CareerEntry = undefined;

}
