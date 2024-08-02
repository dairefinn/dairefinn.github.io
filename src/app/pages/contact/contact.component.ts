import { Component } from '@angular/core';
import { PageWrapperComponent } from '../../components/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageWrapperComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor() {
    document.title = 'Daire Finn / Contact';
  }

}
