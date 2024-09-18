import { Component } from '@angular/core';
import { ProjectItem, projects } from '../../../data/projects';
import { DatePipe } from '@angular/common';
import { TagComponent } from '../../components/tag/tag.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { ProjectEntryComponent } from '../../components/project-entry/project-entry.component';

interface PageProjectItem extends ProjectItem {
  expanded: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe,
    TagComponent,
    PageWrapperComponent,
    ProjectEntryComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectEntries: PageProjectItem[] = projects as PageProjectItem[];

  constructor() {
    document.title = 'Daire Finn / Projects';
  }

}
