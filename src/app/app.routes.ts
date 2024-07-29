import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CareerComponent } from './pages/career/career.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
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
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];
