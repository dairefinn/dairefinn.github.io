import { Component, input, Input } from '@angular/core';
import { CareerEntry, CareerEntryType } from '../../../data/career';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-career-entry',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './career-entry.component.html',
  styleUrl: './career-entry.component.scss'
})
export class CareerEntryComponent {

  public readonly eCareerEntryType = CareerEntryType;

  @Input() careerEntry?: CareerEntry = undefined;
  @Input() showDate: boolean = true;

}
