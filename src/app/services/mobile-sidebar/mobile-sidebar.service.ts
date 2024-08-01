import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileSidebarService {

  public isSidebarOpen: boolean = false;

  constructor() { }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
