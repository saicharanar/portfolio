import { motion } from 'motion/react';
import { BrandMark } from '../components/BrandMark';
import { SceneChrome } from '../components/SceneChrome';

export function OpeningArtifact() {
  return (
    <div id="top" data-scene="top" className="opening-sequence">
      <motion.section
        className="stage opening-stage"
        aria-labelledby="opening-title"
      >
        <SceneChrome index="00" label="Profile / Active" />

        <div className="opening-stage__body">
          <motion.div
            className="opening-artifact"
            aria-hidden="true"
          >
            <motion.div
              className="opening-artifact__ambient"
              initial={{ opacity: 0, scale: 0.84, rotate: -2.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandMark variant="hero" decorative />
            </motion.div>
          </motion.div>

          <motion.div
            className="opening-copy"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="opening-copy__role">Frontend Engineer</p>
            <h1 id="opening-title">
              <span>Sai Charan<em>.</em></span>
            </h1>
            <p className="opening-copy__statement">
              I solve product problems, build dependable systems, and launch a few ideas of my own.
            </p>
            <div className="opening-actions">
              <a href="#professional">
                <span>Selected work</span>
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </motion.div>
        </div>
        <span className="opening-stage__sweep" aria-hidden="true" />
      </motion.section>
    </div>
  );
}
