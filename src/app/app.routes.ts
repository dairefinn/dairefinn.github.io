import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomepageComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'career',
        component: CareerComponent,
      }
    ]
  }
];
