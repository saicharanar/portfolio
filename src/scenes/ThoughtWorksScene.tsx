import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectIdentity } from '../components/ProjectIdentity';

const devices = [
  { name: 'Meeting room', kind: 'display' },
  { name: 'Front desk', kind: 'kiosk' },
  { name: 'Lab two', kind: 'sensor hub' },
] as const;

export function ThoughtWorksScene() {
  const [locked, setLocked] = useState([false, true, false]);

  const toggleDevice = (index: number) => {
    setLocked((current) =>
      current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
    );
  };

  return (
    <motion.section
      id="thoughtworks"
      data-scene="thoughtworks"
      className="stage project-stage thoughtworks-stage"
    >
      <div className="project-scene__layout thoughtworks-layout">
        <motion.header
          className="project-copy thoughtworks-copy"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.45 }}
          transition={{ duration: 0.62 }}
        >
          <ProjectIdentity name="ThoughtWorks" detail="Device management, 2021 to 2025" />
          <h2>One device portal. Five teams.</h2>
          <p className="project-deck">
            Accessible device management across multiple organizations, with shared state and independently owned releases.
          </p>
        </motion.header>

        <div className="project-camera fleet-camera">
          <motion.div
            className="fleet-product"
            aria-label="Interactive device management portal"
            initial={{ opacity: 0, x: -32, y: 24 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ amount: 0.28 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <header>
              <strong>Device management portal</strong>
              <span>3 devices</span>
            </header>
            <div className="fleet-product__rows">
              {devices.map((device, index) => (
                <button
                  type="button"
                  key={device.name}
                  onClick={() => toggleDevice(index)}
                  aria-pressed={locked[index]}
                >
                  <span className="fleet-product__status" aria-hidden="true" />
                  <strong>{device.name}</strong>
                  <small>{device.kind}</small>
                  <em>{locked[index] ? 'locked' : 'online'}</em>
                  <i aria-hidden="true"><b /></i>
                </button>
              ))}
            </div>
            <footer>
              <span>{locked.filter(Boolean).length} of 3 locked</span>
              <span>Shared state, change logged</span>
            </footer>
          </motion.div>
        </div>

        <dl className="fleet-proof">
          <div><dt>Accessible components</dt><dd>25+</dd></div>
          <div><dt>Teams</dt><dd>5+</dd></div>
          <div><dt>PR reviews</dt><dd>200+</dd></div>
          <div><dt>Releases per quarter</dt><dd>3</dd></div>
        </dl>
      </div>
    </motion.section>
  );
}
