import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';
import { ButtonComponent } from '../../components/button/button.component';
import { careerEntriesPositions, CareerEntry } from '../../../data/career';

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
  latestPosition: CareerEntry;
  latestPositionIsActive: boolean = false;

  constructor() {
    document.title = 'Daire Finn / Home';
    this.viewingSpotifyPlaylist = false;
    this.latestPosition = this.getLatestPosition();
    this.latestPositionIsActive = this.latestPosition.endDate ? this.latestPosition.endDate > new Date() : true; // Check if the latest position endDate is populated and in the past
  }

  toggleShowSpotifyPlaylist(): void {
    this.viewingSpotifyPlaylist = !this.viewingSpotifyPlaylist;
  }

  getLatestPosition(): CareerEntry {
    return careerEntriesPositions[0];
  }

}
