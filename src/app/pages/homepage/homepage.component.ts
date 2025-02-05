import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CardComponent,
    PageWrapperComponent,
    ButtonComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  viewingSpotifyPlaylist: boolean;

  constructor() {
    document.title = 'Daire Finn / Home';
    this.viewingSpotifyPlaylist = false;
  }

  toggleShowSpotifyPlaylist(): void {
    this.viewingSpotifyPlaylist = !this.viewingSpotifyPlaylist;
  }

}
