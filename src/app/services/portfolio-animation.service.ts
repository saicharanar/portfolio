import { Injectable, NgZone, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class PortfolioAnimationService {
  private readonly zone = inject(NgZone);

  init(root: HTMLElement): void {
    this.zone.runOutsideAngular(() => {
      if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const worldImage = root.querySelector('.world-image') as HTMLElement | null;
      const worldDepth = root.querySelector('.world-depth');
      const hero = root.querySelector('.hero');

      this.playIntro(root, worldImage);
      this.playIdleHeroMotion(root);
      this.playBackgroundDepth(root, worldImage, worldDepth);
      this.playHeroExit(root, hero);
      this.revealPageContent(root);
    });
  }

  private playIntro(root: HTMLElement, worldImage: HTMLElement | null): void {
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .from(root.querySelector('.site-nav'), { y: -18, opacity: 0, duration: 0.9 })
      .from(worldImage, { scale: 1.045, opacity: 0.9, duration: 2.2 }, 0)
      .from(root.querySelector('.eyebrow'), { y: 16, opacity: 0, duration: 0.7 }, 0.25)
      .from(root.querySelector('h1'), { y: 34, opacity: 0, duration: 1.05 }, 0.38)
      .from(root.querySelector('.hero-copy'), { y: 20, opacity: 0, duration: 0.75 }, 0.72)
      .from(
        root.querySelectorAll('.hero-actions .button'),
        { y: 18, opacity: 0, stagger: 0.1, duration: 0.7 },
        0.9,
      )
      .from(root.querySelector('.scroll-cue'), { y: 12, opacity: 0, duration: 0.7 }, 1.1);
  }

  private playIdleHeroMotion(root: HTMLElement): void {
    gsap.to(root.querySelectorAll('.hero-actions .button'), {
      y: -4,
      duration: 2.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.22,
    });

    gsap.to(root.querySelector('.scroll-cue i'), {
      scaleY: 0.45,
      transformOrigin: 'top center',
      duration: 1.15,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  private playBackgroundDepth(
    root: HTMLElement,
    worldImage: HTMLElement | null,
    worldDepth: Element | null,
  ): void {
    gsap.to(worldDepth, {
      opacity: 0.78,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    if (!worldImage) {
      return;
    }

    gsap.to(worldImage, {
      scale: 1.025,
      backgroundPosition: 'center 13%',
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
    });
  }

  private playHeroExit(root: HTMLElement, hero: Element | null): void {
    gsap.to(root.querySelector('.hero-content'), {
      yPercent: -26,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: '42% center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(root.querySelector('.scroll-cue'), {
      y: -22,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: '28% top',
        end: '70% top',
        scrub: true,
      },
    });
  }

  private revealPageContent(root: HTMLElement): void {
    this.revealOnScroll(root.querySelectorAll('.opening-proof p'), root.querySelector('.opening'), {
      x: -28,
      y: 0,
      stagger: 0.1,
      start: 'top 72%',
    });

    this.revealOnScroll(
      root.querySelectorAll('.opening-copy > *'),
      root.querySelector('.opening-copy'),
      {
        y: 52,
        stagger: 0.12,
        start: 'top 76%',
      },
    );

    this.revealOnScroll(
      root.querySelectorAll('.experience-heading > *'),
      root.querySelector('.experience-heading'),
      {
        y: 50,
        stagger: 0.12,
        start: 'top 76%',
      },
    );

    this.revealOnScroll(
      root.querySelectorAll('.experience-flow article'),
      root.querySelector('.experience-flow'),
      {
        y: 72,
        stagger: 0.16,
        start: 'top 76%',
      },
    );

    gsap.utils.toArray<HTMLElement>('.case-study').forEach((section) => {
      this.revealCaseStudy(section);
    });

    this.revealOnScroll(
      root.querySelectorAll('.skills-heading > *'),
      root.querySelector('.skills-heading'),
      {
        y: 34,
        stagger: 0.1,
        start: 'top 78%',
      },
    );

    gsap.utils.toArray<HTMLElement>('.skill-groups article, .closing > *').forEach((element) => {
      this.revealOnScroll([element], element, {
        y: 26,
        start: 'top 88%',
      });
    });
  }

  private revealCaseStudy(section: HTMLElement): void {
    const shell = section.querySelector('.case-shell');
    const number = section.querySelector('.case-number');
    const heading = section.querySelector('.case-heading');
    const bodyItems = section.querySelectorAll('.case-body > div');

    this.revealOnScroll(shell ? [shell] : [], section, {
      y: 46,
      start: 'top 74%',
    });

    this.revealOnScroll(number ? [number] : [], section, {
      y: 54,
      start: 'top 74%',
    });

    this.revealOnScroll(heading ? [heading] : [], section, {
      y: 62,
      start: 'top 70%',
    });

    this.revealOnScroll(bodyItems, section, {
      y: 42,
      stagger: 0.12,
      start: 'top 54%',
    });

    gsap.to(heading, {
      xPercent: -3,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(bodyItems, {
      xPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  private revealOnScroll(
    elements: Element | Element[] | NodeListOf<Element>,
    trigger: Element | null,
    options?: gsap.TweenVars,
  ): void {
    if (!trigger) {
      return;
    }

    gsap.fromTo(
      elements,
      {
        x: options?.['x'] ?? 0,
        y: options?.['y'] ?? 46,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: options?.['duration'] ?? 0.95,
        stagger: options?.['stagger'] ?? 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger,
          start: options?.['start'] ?? 'top 78%',
          end: options?.['end'] ?? 'bottom 22%',
          toggleActions: 'play none none none',
        },
      },
    );
  }
}
