import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ProjectIdentity } from '../components/ProjectIdentity';

const views = [
  { id: 'today', label: 'Today', src: '/assets/anchor-today.png' },
  { id: 'goals', label: 'Goals', src: '/assets/anchor-goals.png' },
  { id: 'money', label: 'Money', src: '/assets/anchor-money.png' },
] as const;

export function AnchorScene() {
  const [activeView, setActiveView] = useState(0);
  const view = views[activeView];

  return (
    <motion.section
      id="anchor"
      data-scene="anchor"
      className="stage project-stage anchor-stage"
      initial={false}
    >
      <motion.header
        className="project-copy anchor-copy"
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.62 }}
      >
        <ProjectIdentity name="Anchor" detail="Local-first planner" />
        <h2>Your plan stays on your device.</h2>
        <p className="project-deck">
          Tasks, routines, goals, and expenses remain useful offline, without an account, a server, or a data hand-off.
        </p>
      </motion.header>

      <motion.div
        className="anchor-product"
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 0.78, 0.24, 1] }}
      >
        <div className="anchor-phone">
          <span aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.img
              key={view.id}
              src={view.src}
              alt={`Anchor ${view.label} screen`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
        <div className="anchor-tabs" aria-label="Anchor screens">
          {views.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveView(index)}
              aria-pressed={index === activeView}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}
