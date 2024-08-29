import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationTabOption, NavigationTabsComponent } from '../../components/navigation-tabs/navigation-tabs.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RESUME_DOWNLOAD_LINK } from '../../../data/career';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    RouterModule,
    NavigationTabsComponent,
    PageWrapperComponent,
    ButtonComponent
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

  optionsNavigation: NavigationTabOption[] = [
    // {
    //   label: 'Overview',
    //   route: 'overview'
    // },
    {
      label: 'History',
      route: 'history'
    },
    {
      label: 'Technologies',
      route: 'technologies'
    }
  ];

  constructor(private router: Router) {}

  get isOnPageCV(): boolean {
    return this.router.url.endsWith('/overview');
  }

  public downloadResume(): void {
    window.open(RESUME_DOWNLOAD_LINK, '_blank');
  }
}
