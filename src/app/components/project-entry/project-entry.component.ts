import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../../data/projects';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-project-entry',
  standalone: true,
  imports: [
    TagComponent
  ],
  templateUrl: './project-entry.component.html',
  styleUrl: './project-entry.component.scss'
})
export class ProjectEntryComponent {

  @Input() projectItem?: ProjectItem = undefined;
  dropdownExpanded: boolean = false;

  public toggleExpanded(): void {
    this.dropdownExpanded = !this.dropdownExpanded;
  }

}
