import { Component } from '@angular/core';
import { proofPoints } from '../../data/portfolio-data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSectionComponent {
  protected readonly proofPoints = proofPoints;
}
