import { Component, OnInit } from '@angular/core';
import { ProjectItem, projects } from '../../../data/projects';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  projectEntries: ProjectItem[] = [];

  ngOnInit(): void {
    this.projectEntries = projects.reverse();
  }

}
