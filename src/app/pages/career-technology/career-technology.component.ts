import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { technologyEntries, TechnologyItem } from '../../../data/technologies';
import { TechnologyComponent } from '../../components/technology/technology.component';
import { Tag } from '../../../data/tag';
import { TagComponent } from '../../components/tag/tag.component';
import { TableOfContentsComponent, TableOfContentsItem } from '../../components/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-career-technology',
  standalone: true,
  imports: [
    TechnologyComponent,
    TagComponent,
    TableOfContentsComponent
  ],
  templateUrl: './career-technology.component.html',
  styleUrl: './career-technology.component.scss'
})
export class CareerTechnologyComponent {

  @ViewChildren('wrapperTechnologyItem') wrapperTechnologyItems?: QueryList<ElementRef<HTMLDivElement>>;

  technologyEntries: TechnologyItem[] = technologyEntries;
  uniqueTagItems: Tag[] = technologyEntries.map(technology => technology.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index);

  uniqueTechnologyNames: TableOfContentsItem[] = technologyEntries.map(technology => ({
    title: technology.title,
    slug: this.getTagIdForTechnology(technology)
  }));

  getTagIdForTechnology(technology: TechnologyItem): string {
    return technology.title
      .toLowerCase()
      .replaceAll(',', '')
      .replaceAll(',', '')
      .replaceAll(' ', '-');
  }

  scrollToId(slug: string): void {
    if (!this.wrapperTechnologyItems) {
      return;
    }

    if (!slug) {
      return;
    }

    const technologyItems = this.wrapperTechnologyItems.toArray();
    const technologyItem = technologyItems.find(technologyItem => technologyItem.nativeElement.id === slug);

    if (!technologyItem) {
      return;
    }

    technologyItem.nativeElement.scrollIntoView();
  }

}
