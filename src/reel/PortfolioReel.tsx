import { useEffect } from 'react';
import type { SceneId } from '../app/portfolio-content';
import { ContactStage } from '../components/ContactStage';
import { ProjectStack } from '../components/ProjectStack';
import { WorkChapter } from '../components/WorkChapter';
import { ActionKitScene } from '../scenes/ActionKitScene';
import { AnchorScene } from '../scenes/AnchorScene';
import { GlideScene } from '../scenes/GlideScene';
import { ModMedScene } from '../scenes/ModMedScene';
import { OpeningArtifact } from '../scenes/OpeningArtifact';
import { RelayScene } from '../scenes/RelayScene';
import { StackScene } from '../scenes/StackScene';
import { ThoughtWorksScene } from '../scenes/ThoughtWorksScene';

type PortfolioReelProps = {
  onActiveSceneChange: (scene: SceneId) => void;
  onOpenPalette: () => void;
};

export function PortfolioReel({
  onActiveSceneChange,
  onOpenPalette,
}: PortfolioReelProps) {
  useEffect(() => {
    let animationFrame = 0;
    const sceneElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scene]'),
    );

    const updateActiveScene = () => {
      animationFrame = 0;
      const focusLine = window.innerHeight * 0.46;
      const visibleScenes = sceneElements.filter((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < window.innerHeight;
      });
      const scenesAtFocusLine = visibleScenes.filter((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top <= focusLine && bounds.bottom > focusLine;
      });
      const sceneElement = scenesAtFocusLine.at(-1) ?? visibleScenes.reduce<HTMLElement | null>((closest, element) => {
        if (!closest) return element;

        const bounds = element.getBoundingClientRect();
        const closestBounds = closest.getBoundingClientRect();
        const distance = Math.abs(bounds.top + bounds.height / 2 - focusLine);
        const closestDistance = Math.abs(
          closestBounds.top + closestBounds.height / 2 - focusLine,
        );
        return distance < closestDistance ? element : closest;
      }, null);
      const scene = sceneElement?.dataset.scene as SceneId | undefined;
      if (scene) onActiveSceneChange(scene);
    };

    const requestSceneUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveScene);
    };

    requestSceneUpdate();
    window.addEventListener('scroll', requestSceneUpdate, { passive: true });
    window.addEventListener('resize', requestSceneUpdate);
    window.addEventListener('hashchange', requestSceneUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestSceneUpdate);
      window.removeEventListener('resize', requestSceneUpdate);
      window.removeEventListener('hashchange', requestSceneUpdate);
    };
  }, [onActiveSceneChange]);

  return (
    <div className="portfolio-experience">
      <OpeningArtifact />
      <section className="work-group work-group--professional" aria-label="Professional work">
        <WorkChapter
          id="professional"
          eyebrow="Professional work, 2021 to now"
          heading="I’ve worked with"
          statement="Patient check-in and device management, shipped with engineering teams."
          projects={[
            { href: '#modmed', name: 'ModMed', detail: 'Patient check-in, 2025 to now' },
            { href: '#thoughtworks', name: 'ThoughtWorks', detail: 'Device management, 2021 to 2025' },
          ]}
        />
        <ProjectStack startIndex={0}>
          <ModMedScene />
          <ThoughtWorksScene />
        </ProjectStack>
      </section>

      <section className="work-group work-group--independent" aria-label="Independent work">
        <WorkChapter
          id="independent"
          eyebrow="Independent products"
          heading="Built independently."
          statement="A React library, local-first software, a menu bar utility, and browser automation."
          projects={[
            { href: '#actionkit', name: 'ActionKit', detail: 'React library' },
            { href: '#anchor', name: 'Anchor', detail: 'Local-first PWA' },
            { href: '#relay', name: 'Relay', detail: 'macOS utility' },
            { href: '#glide', name: 'Glide', detail: 'TypeScript CLI' },
          ]}
        />
        <ProjectStack startIndex={2}>
          <ActionKitScene onOpenPalette={onOpenPalette} />
          <AnchorScene />
          <RelayScene />
          <GlideScene />
        </ProjectStack>
      </section>
      <StackScene />
      <ContactStage />
    </div>
  );
}
