import { Component } from '@angular/core';
import { navLinks } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  protected readonly navLinks = navLinks;
}
