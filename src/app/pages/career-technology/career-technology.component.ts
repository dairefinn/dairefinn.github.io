import { Component } from '@angular/core';
import { technologyEntries, TechnologyItem } from '../../../data/technologies';
import { TechnologyComponent } from '../../components/technology/technology.component';

@Component({
  selector: 'app-career-technology',
  standalone: true,
  imports: [
    TechnologyComponent
  ],
  templateUrl: './career-technology.component.html',
  styleUrl: './career-technology.component.scss'
})
export class CareerTechnologyComponent {

  technologyEntries: TechnologyItem[] = technologyEntries;

}
