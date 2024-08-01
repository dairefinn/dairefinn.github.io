import { Component, Input } from '@angular/core';
import { Tag } from '../../../data/tag';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {

  @Input() tag?: Tag;

}
