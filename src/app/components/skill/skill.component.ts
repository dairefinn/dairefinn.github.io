import { Component, Input } from '@angular/core';
import { SkillExperienceType, SkillItem } from '../../../data/skills';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    TagComponent
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  public readonly eSkillExperienceType = SkillExperienceType;

  @Input() skill?: SkillItem;

  showExperience: boolean = true;

}
