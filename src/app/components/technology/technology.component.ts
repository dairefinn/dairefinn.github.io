import { Component, Input } from '@angular/core';
import { TechnologyItem } from '../../../data/technologies';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    TagComponent
  ],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {

  @Input() technology?: TechnologyItem;

  showExperience: boolean = true;

  toggleShowExperience(): void {
    this.showExperience = !this.showExperience;
  }

}
