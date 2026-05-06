import { Component } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-hero',
  imports: [ScrollReveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
