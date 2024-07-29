import { Component, OnInit } from '@angular/core';
import { careerEntries, CareerEntry, CareerEntryType } from '../../../data/career';
import { CommonModule, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent implements OnInit {
  
  public readonly eCareerEntryType = CareerEntryType;

  careerEntries: CareerEntry[] = [];

  ngOnInit(): void {
    this.careerEntries = careerEntries;
  }

}
