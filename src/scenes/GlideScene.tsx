import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ProjectIdentity } from '../components/ProjectIdentity';

type RecordingState = 'idle' | 'opening' | 'recording' | 'saved';

const recordingCopy: Record<RecordingState, { time: string; status: string }> = {
  idle: { time: '00:00', status: 'ready for a route' },
  opening: { time: '00:01', status: 'opening Chromium' },
  recording: { time: '00:07', status: 'scrolling, settling, capturing' },
  saved: { time: '00:12', status: 'portfolio-walkthrough.webm saved' },
};

export function GlideScene() {
  const [state, setState] = useState<RecordingState>('idle');
  const timersRef = useRef<number[]>([]);

  useEffect(() => () => timersRef.current.forEach(window.clearTimeout), []);

  const startRecording = () => {
    timersRef.current.forEach(window.clearTimeout);
    setState('opening');
    timersRef.current = [
      window.setTimeout(() => setState('recording'), 380),
      window.setTimeout(() => setState('saved'), 1850),
    ];
  };

  return (
    <motion.section
      id="glide"
      data-scene="glide"
      className="stage project-stage glide-stage stage--light"
      initial={false}
    >
      <motion.header
        className="project-copy glide-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.45 }}
        transition={{ duration: 0.62 }}
      >
        <ProjectIdentity name="Glide" detail="TypeScript recording CLI" />
        <h2>Record the route, not the cursor.</h2>
        <p className="project-deck">
          Glide drives Chromium through a product, waits for interface states to settle, and leaves a clean WebM walkthrough behind.
        </p>
      </motion.header>

      <motion.div
        className="glide-product"
        data-state={state}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <header>
          <span aria-hidden="true"><i /><i /><i /></span>
          <strong>glide record</strong>
          <button
            type="button"
            onClick={startRecording}
            disabled={state === 'opening' || state === 'recording'}
          >
            {state === 'idle' ? 'Record' : state === 'saved' ? 'Again' : 'Recording'}
          </button>
        </header>
        <div className="glide-product__terminal">
          <code><span>$</span> glide record ./portfolio</code>
          <AnimatePresence mode="wait">
            <motion.p
              key={state}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              aria-live="polite"
            >
              {recordingCopy[state].status}
            </motion.p>
          </AnimatePresence>
          <div className="glide-progress" aria-hidden="true"><span /></div>
        </div>
        <footer>
          <span><i aria-hidden="true" /> WebM walkthrough</span>
          <strong>{recordingCopy[state].time}</strong>
        </footer>
      </motion.div>

    </motion.section>
  );
}
