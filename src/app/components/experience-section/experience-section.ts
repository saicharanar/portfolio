import { Component } from '@angular/core';
import { experiences } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSectionComponent {
  protected readonly experiences = experiences;
}
