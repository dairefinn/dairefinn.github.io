import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { skillEntries, SkillItem } from '../../../data/skills';
import { SkillComponent } from '../../components/skill/skill.component';
import { Tag } from '../../../data/tag';
import { TagComponent } from '../../components/tag/tag.component';
import { TableOfContentsComponent, TableOfContentsItem } from '../../components/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-career-skills',
  standalone: true,
  imports: [
    SkillComponent,
    TagComponent,
    TableOfContentsComponent
  ],
  templateUrl: './career-skills.component.html',
  styleUrl: './career-skills.component.scss'
})
export class CareerSkillsComponent {

  @ViewChildren('wrapperSkillItem') wrapperSkillItems?: QueryList<ElementRef<HTMLDivElement>>;

  skillEntries: SkillItem[] = skillEntries;
  uniqueTagItems: Tag[] = skillEntries.map(skill => skill.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index);

  uniqueSkillNames: TableOfContentsItem[] = skillEntries.map(skill => ({
    title: skill.title,
    slug: this.getTagIdForSkill(skill)
  }));

  getTagIdForSkill(skill: SkillItem): string {
    return skill.title
      .toLowerCase()
      .replaceAll(',', '')
      .replaceAll(',', '')
      .replaceAll(' ', '-');
  }

  scrollToId(slug: string): void {
    if (!this.wrapperSkillItems) {
      return;
    }

    if (!slug) {
      return;
    }

    const skillItems = this.wrapperSkillItems.toArray();
    const skillItem = skillItems.find(skillItem => skillItem.nativeElement.id === slug);

    if (!skillItem) {
      return;
    }

    skillItem.nativeElement.scrollIntoView();
  }

}
