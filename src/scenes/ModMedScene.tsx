import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ProjectIdentity } from '../components/ProjectIdentity';

const reasons = [
  'Knee pain, right side',
  'Follow-up visit',
  'A new symptom',
] as const;

export function ModMedScene() {
  const [selectedReason, setSelectedReason] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);

  return (
    <motion.section
      id="modmed"
      data-scene="modmed"
      className="stage project-stage modmed-stage"
    >
      <div className="project-scene__layout modmed-layout">
        <motion.header
          className="project-copy modmed-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.45 }}
          transition={{ duration: 0.62 }}
        >
          <ProjectIdentity name="ModMed" detail="Patient check-in, 2025 to now" />
          <h2>Patient check-in that keeps its place.</h2>
          <p className="project-deck">
            A guided intake flow for issue selection, follow-ups, and interrupted visits, built so patients can return without starting over.
          </p>
        </motion.header>

        <div className="project-camera modmed-camera">
          <motion.div
            className="modmed-product"
            initial={{ opacity: 0, x: 32, y: 26 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <header className="modmed-product__header">
              <strong>Before your visit</strong>
              <span>Step 2 of 4</span>
            </header>
            <div className="modmed-product__progress" aria-hidden="true">
              <i><b /></i><i><b /></i><i /><i />
            </div>

            <AnimatePresence mode="wait">
              {!isReviewing ? (
                <motion.div
                  className="modmed-product__question"
                  key="question"
                  initial={{ opacity: 0, x: 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -36 }}
                  transition={{ duration: 0.36 }}
                >
                  <p>What brings you in today?</p>
                  <div className="modmed-product__choices" role="radiogroup" aria-label="Visit reason">
                    {reasons.map((reason, index) => (
                      <button
                        type="button"
                        role="radio"
                        aria-checked={selectedReason === index}
                        key={reason}
                        onClick={() => setSelectedReason(index)}
                      >
                        <span aria-hidden="true">{selectedReason === index ? '✓' : ''}</span>
                        <strong>{reason}</strong>
                      </button>
                    ))}
                  </div>
                  <footer className="modmed-product__footer">
                    <button type="button" onClick={() => setSelectedReason(0)}>Back</button>
                    <button type="button" onClick={() => setIsReviewing(true)}>
                      Continue, 1 selected <span aria-hidden="true">→</span>
                    </button>
                  </footer>
                </motion.div>
              ) : (
                <motion.div
                  className="modmed-product__proof"
                  key="proof"
                  initial={{ opacity: 0, x: 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -36 }}
                  transition={{ duration: 0.36 }}
                >
                  <span aria-hidden="true">✓</span>
                  <p>Still here.</p>
                  <strong>{reasons[selectedReason]}</strong>
                  <small>The answer moved forward with the route.</small>
                  <button type="button" onClick={() => setIsReviewing(false)}>Back to edit</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
