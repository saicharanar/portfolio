import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { AboutSectionComponent } from './components/about-section/about-section';
import { BackgroundComponent } from './components/background/background';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { ExperienceSectionComponent } from './components/experience-section/experience-section';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { NavbarComponent } from './components/navbar/navbar';
import { SkillsSectionComponent } from './components/skills-section/skills-section';
import { WorkSectionComponent } from './components/work-section/work-section';
import { PortfolioAnimationService } from './services/portfolio-animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    WorkSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly animations = inject(PortfolioAnimationService);

  ngAfterViewInit(): void {
    this.animations.init(this.host.nativeElement);
  }
}
