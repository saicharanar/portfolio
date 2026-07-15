import { useCallback, useEffect, useRef, useState } from 'react';
import { CommandPalette } from '../components/CommandPalette';
import { Navigation } from '../components/Navigation';
import { SystemChrome } from '../components/SystemChrome';
import { PortfolioReel } from '../reel/PortfolioReel';
import { sceneById } from './portfolio-content';
import type { SceneId } from './portfolio-content';

export function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [activeScene, setActiveScene] = useState<SceneId>('top');
  const paletteTriggerRef = useRef<HTMLButtonElement>(null);

  const openPalette = useCallback(() => setIsPaletteOpen(true), []);
  const closePalette = useCallback(() => setIsPaletteOpen(false), []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') return;
      event.preventDefault();
      setIsPaletteOpen((isOpen) => !isOpen);
    };

    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    window.requestAnimationFrame(() => target?.scrollIntoView());
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the work</a>
      <SystemChrome />
      <Navigation
        ref={paletteTriggerRef}
        activeScene={activeScene}
        onOpenPalette={openPalette}
      />
      <main id="main-content">
        <PortfolioReel
          onActiveSceneChange={setActiveScene}
          onOpenPalette={openPalette}
        />
      </main>
      <CommandPalette
        background={sceneById[activeScene].background}
        isOpen={isPaletteOpen}
        onClose={closePalette}
        triggerRef={paletteTriggerRef}
        tone={sceneById[activeScene].tone}
      />
    </>
  );
}
