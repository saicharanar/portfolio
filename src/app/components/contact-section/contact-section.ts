import { Component } from '@angular/core';
import { contactLinks } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  protected readonly contactLinks = contactLinks;
}
