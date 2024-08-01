import { Component } from '@angular/core';
import { technologyEntries, TechnologyItem } from '../../../data/technologies';
import { TechnologyComponent } from '../../components/technology/technology.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-career-technology',
  standalone: true,
  imports: [
    TechnologyComponent,
    CardComponent
  ],
  templateUrl: './career-technology.component.html',
  styleUrl: './career-technology.component.scss'
})
export class CareerTechnologyComponent {

  technologyEntries: TechnologyItem[] = technologyEntries;

  constructor() {
    document.title = 'Daire Finn / Career / Technology';
  }

}
