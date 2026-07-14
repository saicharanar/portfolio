import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type OpeningArtifactProps = {
  onOpenPalette: () => void;
};

const interactionStates = [
  { signal: 'input', detail: 'a choice is made' },
  { signal: 'state', detail: 'the system remembers' },
  { signal: 'feedback', detail: 'the interface answers' },
] as const;

export function OpeningArtifact({ onOpenPalette }: OpeningArtifactProps) {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [activeState, setActiveState] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ['start start', 'end start'],
  });
  const bodyY = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    reduceMotion ? [0, 0, 0] : [0, 0, -54],
  );
  const bodyScale = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.975],
  );
  const bodyOpacity = useTransform(
    scrollYProgress,
    [0, 0.68, 1],
    reduceMotion ? [1, 1, 1] : [1, 1, 0.24],
  );
  const lightX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-120, 220],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveState((current) => (current + 1) % interactionStates.length);
    }, 1900);
    return () => window.clearInterval(interval);
  }, []);

  const state = interactionStates[activeState];

  return (
    <div
      ref={sequenceRef}
      id="top"
      data-scene="top"
      className="opening-sequence"
    >
      <motion.section
        className="stage opening-stage"
        initial={false}
        aria-labelledby="opening-title"
      >
        <motion.span
          className="opening-stage__light"
          aria-hidden="true"
          style={{ x: lightX }}
        />

        <motion.div
          className="opening-stage__body"
          style={{ y: bodyY, scale: bodyScale, opacity: bodyOpacity }}
        >
          <motion.p
            className="stage-index"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ duration: 0.55 }}
          >
            Frontend engineer
          </motion.p>

          <motion.h1
            id="opening-title"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.55 }}
            transition={{ duration: 0.72, ease: [0.22, 0.78, 0.24, 1] }}
          >
            <span>Sai</span>
            <span>Charan<em>.</em></span>
          </motion.h1>

          <motion.p
            className="opening-stage__statement"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ duration: 0.58, delay: 0.08 }}
          >
            Don’t just read the work. Change the state and see what happens next.
          </motion.p>

          <div className="opening-signal" aria-label="Live interaction trace">
            <motion.button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              whileHover={{ y: -4 }}
              whileTap={{ y: 2, scale: 0.97 }}
            >
              ⌘K
            </motion.button>
            <span className="opening-signal__track" aria-hidden="true">
              <motion.i
                animate={{ x: ['0%', '740%', '0%'] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={state.signal}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                aria-live="polite"
              >
                <span>{state.signal}</span>
                <strong>{state.detail}</strong>
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
