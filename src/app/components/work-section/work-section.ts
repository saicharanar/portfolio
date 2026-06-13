import { Component } from '@angular/core';
import { projects } from '../../data/portfolio-data';

@Component({
  selector: 'app-work-section',
  standalone: true,
  templateUrl: './work-section.html',
  styleUrl: './work-section.scss',
})
export class WorkSectionComponent {
  protected readonly projects = projects;
}
