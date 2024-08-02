import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CardComponent,
    PageWrapperComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor() {
    document.title = 'Daire Finn / Home';
  }

}
