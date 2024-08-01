import { Component, EventEmitter, Output } from '@angular/core';
import { MobileSidebarService } from '../../services/mobile-sidebar/mobile-sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(
    public mobileSidebarService: MobileSidebarService
  ) { }

  onClickMenuIcon(): void {
    this.mobileSidebarService.toggleSidebar();
  }

}
