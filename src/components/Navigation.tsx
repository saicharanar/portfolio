import { forwardRef } from 'react';
import type { CSSProperties } from 'react';
import { sceneById } from '../app/portfolio-content';
import type { SceneId } from '../app/portfolio-content';

type NavigationProps = {
  onOpenPalette: () => void;
  activeScene: SceneId;
};

export const Navigation = forwardRef<HTMLButtonElement, NavigationProps>(
  function Navigation({ onOpenPalette, activeScene }, ref) {
    const scene = sceneById[activeScene];
    const navigationStyle = {
      '--nav-scene': scene.background,
    } as CSSProperties;

    return (
      <header
        className="site-header"
        data-scene={scene.id}
        data-tone={scene.tone}
        style={navigationStyle}
      >
        <nav className="primary-nav" aria-label="Primary navigation">
          <div className="nav-cluster">
            <a
              className="nav-link"
              href="#professional"
              aria-current={scene.area === 'professional' ? 'location' : undefined}
            >
              Professional
            </a>
            <a
              className="nav-link"
              href="#independent"
              aria-current={scene.area === 'independent' ? 'location' : undefined}
            >
              Independent
            </a>
            <a
              className="nav-link"
              href="#contact"
              aria-current={scene.area === 'contact' ? 'location' : undefined}
            >
              Contact
            </a>
            <button
              ref={ref}
              className="palette-trigger"
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
            >
              <kbd>⌘K</kbd>
            </button>
          </div>
        </nav>
      </header>
    );
  },
);
