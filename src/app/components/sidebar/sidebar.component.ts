import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarLinkComponent, SidebarLinkItem } from '../sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarLinkComponent
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
    },
    {
      title: 'Spotify',
      icon: 'fa-brands fa-fw fa-spotify',
      route: 'https://open.spotify.com/user/dman355/',
      isExternal: true
    },
    {
      title: 'Instagram',
      icon: 'fa-brands fa-fw fa-instagram',
      route: 'https://www.instagram.com/dairefinn/',
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
      icon: 'far fa-fw fa-folder-open',
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
