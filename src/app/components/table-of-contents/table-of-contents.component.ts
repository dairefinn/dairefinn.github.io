import { Component } from '@angular/core';

export interface TableOfContentsItem {
  title: string;
  slug: string;
}

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss'
})
export class TableOfContentsComponent {

}
