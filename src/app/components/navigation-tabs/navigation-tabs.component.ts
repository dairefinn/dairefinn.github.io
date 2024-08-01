import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface NavigationTabOption {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navigation-tabs.component.html',
  styleUrl: './navigation-tabs.component.scss'
})
export class NavigationTabsComponent {

  @Input() options: NavigationTabOption[] = [];

}
