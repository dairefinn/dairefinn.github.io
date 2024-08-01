import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface SidebarLinkItem {
  title: string;
  icon: string;
  route: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss'
})
export class SidebarLinkComponent {

  @Input() sidebarItem?: SidebarLinkItem;

}
