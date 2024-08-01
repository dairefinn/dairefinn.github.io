import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationTabOption, NavigationTabsComponent } from '../../components/navigation-tabs/navigation-tabs.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    RouterModule,
    NavigationTabsComponent
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {

  optionsNavigation: NavigationTabOption[] = [
    {
      label: 'History',
      route: 'history'
    },
    {
      label: 'Skills',
      route: 'skills'
    }
  ];

}
