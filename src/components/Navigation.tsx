import { forwardRef, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { sceneById } from '../app/portfolio-content';
import type { SceneId } from '../app/portfolio-content';
import { BrandMark } from './BrandMark';

type NavigationProps = {
  onOpenPalette: () => void;
  activeScene: SceneId;
};

export const Navigation = forwardRef<HTMLButtonElement, NavigationProps>(
  function Navigation({ onOpenPalette, activeScene }, ref) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scene = sceneById[activeScene];
    const navigationStyle = {
      '--nav-scene': scene.background,
    } as CSSProperties;

    useEffect(() => setIsMenuOpen(false), [activeScene]);

    useEffect(() => {
      if (!isMenuOpen) return;

      const closeOnEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setIsMenuOpen(false);
      };

      document.addEventListener('keydown', closeOnEscape);
      return () => document.removeEventListener('keydown', closeOnEscape);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
      <header
        className="site-header"
        data-scene={scene.id}
        data-tone={scene.tone}
        style={navigationStyle}
      >
        <nav className="primary-nav" aria-label="Primary navigation">
          <motion.a
            className="nav-brand"
            href="#top"
            aria-label="Sai Charan, opening"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrandMark variant="compact" decorative />
            <span>
              <strong>Sai Charan</strong>
              <small>Frontend Engineer</small>
            </span>
          </motion.a>
          <motion.div
            className="nav-cluster"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              id="primary-nav-links"
              className="nav-links"
              data-open={isMenuOpen ? 'true' : 'false'}
            >
              <a
                className="nav-link"
                href="#professional"
                aria-current={scene.area === 'professional' ? 'location' : undefined}
                onClick={closeMenu}
              >
                Professional
              </a>
              <a
                className="nav-link"
                href="#independent"
                aria-current={scene.area === 'independent' ? 'location' : undefined}
                onClick={closeMenu}
              >
                Independent
              </a>
              <a
                className="nav-link"
                href="#stack"
                aria-current={scene.area === 'technology' ? 'location' : undefined}
                onClick={closeMenu}
              >
                Technology
              </a>
              <a
                className="nav-link"
                href="#contact"
                aria-current={scene.area === 'contact' ? 'location' : undefined}
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
            <button
              className="nav-menu-trigger"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="primary-nav-links"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span aria-hidden="true"><i /><i /></span>
              <span className="visually-hidden">{isMenuOpen ? 'Close navigation' : 'Open navigation'}</span>
            </button>
            <button
              ref={ref}
              className="palette-trigger"
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
            >
              <kbd>⌘K</kbd>
            </button>
          </motion.div>
        </nav>
      </header>
    );
  },
);
