import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


export enum SidebarItemType {
  EXTERNAL = 'EXTERNAL',
  INTERNAL = 'INTERNAL',
  DOWNLOAD = 'DOWNLOAD'
}

export interface SidebarLinkItem {
  title: string;
  icon: string;
  route: string;
  itemType: SidebarItemType;
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

  public readonly eSidebarItemType = SidebarItemType;

  @Input() sidebarItem?: SidebarLinkItem;

}
