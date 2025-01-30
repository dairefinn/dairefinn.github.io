import { Component } from '@angular/core';
import { ProjectItem, projects, ProjectStatus } from '../../../data/projects';
import { DatePipe } from '@angular/common';
import { TagComponent } from '../../components/tag/tag.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe,
    TagComponent,
    PageWrapperComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public readonly eProjectStatus = ProjectStatus;

  projectEntries: ProjectItem[] = projects;

  constructor() {
    document.title = 'Daire Finn / Projects';
  }

}
