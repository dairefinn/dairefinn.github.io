import { Component } from '@angular/core';
import { ProjectItem, projects } from '../../../data/projects';
import { DatePipe } from '@angular/common';
import { TagComponent } from '../../components/tag/tag.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe,
    TagComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectEntries: ProjectItem[] = projects;

  constructor() {
    document.title = 'Daire Finn / Projects';
  }

}
