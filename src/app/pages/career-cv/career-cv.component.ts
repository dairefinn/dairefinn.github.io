import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { careerEntriesCertifications, careerEntriesPositions, CareerEntry } from '../../../data/career';
import { ProjectItem, projects } from '../../../data/projects';
import { TechnologyComponent } from '../../components/technology/technology.component';
import { CareerEntrySmallComponent } from '../../components/career-entry-small/career-entry-small.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-career-cv',
  standalone: true,
  imports: [
    CardComponent,
    ButtonComponent,
    CareerEntrySmallComponent,
    TechnologyComponent
],
  templateUrl: './career-cv.component.html',
  styleUrl: './career-cv.component.scss'
})
export class CareerCvComponent {

  public readonly environment = environment;

  careerEntries: CareerEntry[] = careerEntriesPositions;
  educationEntries: CareerEntry[] = careerEntriesCertifications;
  projectEntries: ProjectItem[] = projects.filter(project => project.isFeatured);

  downloadAsPDF(): void {
    window.print();
  }

}
