import { Component } from '@angular/core';
import { skillGroups } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSectionComponent {
  protected readonly skillGroups = skillGroups;
}
