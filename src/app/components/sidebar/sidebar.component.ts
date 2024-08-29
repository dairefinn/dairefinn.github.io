import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarItemType, SidebarLinkComponent, SidebarLinkItem } from '../sidebar-link/sidebar-link.component';
import { RESUME_DOWNLOAD_LINK } from '../../../data/career';

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
      itemType: SidebarItemType.EXTERNAL
    },
    {
      title: 'LinkedIn',
      icon: 'fa-brands fa-fw fa-linkedin',
      route: 'https://www.linkedin.com/in/daire-finn-44b883263/',
      itemType: SidebarItemType.EXTERNAL
    },
    {
      title: 'Spotify',
      icon: 'fa-brands fa-fw fa-spotify',
      route: 'https://open.spotify.com/user/dman355/',
      itemType: SidebarItemType.EXTERNAL
    },
    {
      title: 'Instagram',
      icon: 'fa-brands fa-fw fa-instagram',
      route: 'https://www.instagram.com/dairefinn/',
      itemType: SidebarItemType.EXTERNAL
    }
  ];

  internalLinks: SidebarLinkItem[] = [
    {
      title: 'Home',
      icon: 'fa fa-fw fa-home',
      route: '/home',
      itemType: SidebarItemType.INTERNAL
    },
    {
      title: 'Projects',
      icon: 'far fa-fw fa-folder-open',
      route: '/projects',
      itemType: SidebarItemType.INTERNAL
    },
    {
      title: 'Career',
      icon: 'fa fa-fw fa-briefcase',
      route: '/career',
      itemType: SidebarItemType.INTERNAL
    },
    {
      title: 'Contact',
      icon: 'fa fa-fw fa-envelope',
      route: '/contact',
      itemType: SidebarItemType.INTERNAL
    }
  ];

  downloadLinks: SidebarLinkItem[] = [
    {
      title: 'My resume',
      icon: 'fa fa-fw fa-file-pdf',
      route: RESUME_DOWNLOAD_LINK,
      itemType: SidebarItemType.DOWNLOAD
    }
  ]

}
