import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectIdentity } from '../components/ProjectIdentity';

const repositories = [
  { name: 'anchor', task: 'deploy', status: 'running' },
  { name: 'actionkit', task: 'tests', status: 'passed' },
  { name: 'glide', task: 'release', status: 'passed' },
  { name: 'portfolio', task: 'pages', status: 'passed' },
] as const;

export function RelayScene() {
  const [activeRepository, setActiveRepository] = useState(0);
  const repository = repositories[activeRepository];

  return (
    <motion.section
      id="relay"
      data-scene="relay"
      className="stage project-stage relay-stage"
      initial={false}
    >
      <motion.header
        className="project-copy relay-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.45 }}
        transition={{ duration: 0.62 }}
      >
        <ProjectIdentity name="Relay" detail="macOS menu bar utility" />
        <h2>CI status without another tab.</h2>
        <p className="project-deck">
          Relay watches GitHub Actions from the menu bar and compresses repository noise into one calm, trustworthy signal.
        </p>
      </motion.header>

      <motion.div
        className="relay-product"
        aria-label="Relay menu bar utility preview"
        initial={{ opacity: 0, y: 32, rotate: -0.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.62, ease: [0.22, 0.78, 0.24, 1] }}
      >
        <header>
          <strong><i aria-hidden="true" /> relay</strong>
          <span>1 running, 3 passed</span>
        </header>
        <div className="relay-product__repos">
          {repositories.map((item, index) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={activeRepository === index}
              onClick={() => setActiveRepository(index)}
            >
              <i aria-hidden="true" />
              <span><strong>{item.name}</strong><small>{item.task}</small></span>
              <em>{item.status}</em>
            </button>
          ))}
        </div>
        <footer>
          <span>{repository.name} / {repository.task}</span>
          <span>GitHub Actions API. Token encrypted at rest.</span>
        </footer>
      </motion.div>

    </motion.section>
  );
}
