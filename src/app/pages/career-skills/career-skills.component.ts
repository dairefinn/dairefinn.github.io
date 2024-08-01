import { Component } from '@angular/core';
import { skillEntries, SkillItem } from '../../../data/skills';
import { SkillComponent } from '../../components/skill/skill.component';

@Component({
  selector: 'app-career-skills',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './career-skills.component.html',
  styleUrl: './career-skills.component.scss'
})
export class CareerSkillsComponent {

  skillEntries: SkillItem[] = skillEntries;

}
