import { motion } from 'motion/react';
import { ProjectIdentity } from '../components/ProjectIdentity';

type ActionKitSceneProps = {
  onOpenPalette: () => void;
};

export function ActionKitScene({ onOpenPalette }: ActionKitSceneProps) {
  return (
    <motion.section
      id="actionkit"
      data-scene="actionkit"
      className="stage project-stage actionkit-stage"
    >
      <div className="project-scene__layout actionkit-layout">
        <motion.header
          className="project-copy actionkit-copy"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.45 }}
          transition={{ duration: 0.62 }}
        >
          <ProjectIdentity name="ActionKit" detail="React library" />
          <h2>One command system. Any React app.</h2>
          <p className="project-deck">
            Typed actions, searchable commands, and shortcut overrides that stay consistent wherever a React app exposes them.
          </p>
        </motion.header>

        <div className="project-camera command-camera">
          <motion.div
            className="actionkit-product"
            aria-label="ActionKit command palette preview"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.38 }}
            transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          >
            <header>
              <strong>ActionKit</strong>
              <kbd>⌘K</kbd>
            </header>
            <div className="actionkit-product__query">
              <span>open</span>
              <small>3 commands</small>
            </div>
            <div className="actionkit-product__commands">
              <button type="button" onClick={onOpenPalette} data-active="true">
                <i aria-hidden="true">A</i>
                <span><strong>Open Anchor</strong><small>Navigate to project</small></span>
                <kbd>↵</kbd>
              </button>
              <button type="button" onClick={onOpenPalette}>
                <i aria-hidden="true">P</i>
                <span><strong>Open professional work</strong><small>Jump to chapter</small></span>
                <kbd>⌘1</kbd>
              </button>
              <button type="button" onClick={onOpenPalette}>
                <i aria-hidden="true">C</i>
                <span><strong>Open contact</strong><small>Start a conversation</small></span>
                <kbd>⌘3</kbd>
              </button>
            </div>
            <footer>Typed registry, shortcut overrides, persistent search</footer>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
