import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface SidebarLinkItem {
  title: string;
  icon: string;
  route: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  externalLinks: SidebarLinkItem[] = [
    {
      title: 'GitHub',
      icon: 'fa-brands fa-fw fa-github',
      route: 'https://github.com/dairefinn',
      isExternal: true
    },
    {
      title: 'LinkedIn',
      icon: 'fa-brands fa-fw fa-linkedin',
      route: 'https://www.linkedin.com/in/daire-finn-44b883263/',
      isExternal: true
    }
  ];

  internalLinks: SidebarLinkItem[] = [
    {
      title: 'Home',
      icon: 'fa fa-fw fa-home',
      route: '/home'
    },
    {
      title: 'Projects',
      icon: 'fa fa-fw fa-folder-open',
      route: '/projects'
    },
    {
      title: 'Career',
      icon: 'fa fa-fw fa-briefcase',
      route: '/career'
    },
    {
      title: 'Contact',
      icon: 'fa fa-fw fa-envelope',
      route: '/contact'
    }
  ];

}
