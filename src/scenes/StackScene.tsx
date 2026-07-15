import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { TechGlyph, type TechItem } from '../components/TechSignature';

const coreTools = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'angular', label: 'Angular' },
] as const satisfies readonly TechItem[];

const productTools = [
  { id: 'design-systems', label: 'Design systems' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'micro-frontends', label: 'Micro-frontends' },
  { id: 'rest-api', label: 'REST APIs' },
] as const satisfies readonly TechItem[];

const applicationTools = [
  { id: 'redux', label: 'Redux Toolkit' },
  { id: 'rxjs', label: 'RxJS' },
  { id: 'ngrx', label: 'NgRx' },
  { id: 'node', label: 'Node.js' },
  { id: 'indexed-db', label: 'IndexedDB' },
] as const satisfies readonly TechItem[];

const deliveryTools = [
  { id: 'playwright', label: 'Playwright' },
  { id: 'testing', label: 'Jest + Vitest' },
  { id: 'electron', label: 'Electron' },
  { id: 'docker', label: 'Docker' },
  { id: 'ci-cd', label: 'CI/CD' },
] as const satisfies readonly TechItem[];

type SatelliteProps = {
  item: TechItem;
};

type StackClusterProps = {
  index: string;
  label: string;
  items: readonly TechItem[];
  position: 'product' | 'architecture' | 'delivery';
};

function Satellite({ item }: SatelliteProps) {
  return (
    <span
      className="stack-satellite"
      role="img"
      aria-label={item.label}
      title={item.label}
    >
      <i aria-hidden="true">
        <TechGlyph id={item.id} />
      </i>
      <strong aria-hidden="true">{item.label}</strong>
    </span>
  );
}

function StackCluster({
  index,
  label,
  items,
  position,
}: StackClusterProps) {
  return (
    <section className={`stack-cluster stack-cluster--${position}`} aria-label={label}>
      <header>
        <span>{index}</span>
        <h3>{label}</h3>
      </header>
      <div className="stack-cluster__tools">
        {items.map((item) => (
          <Satellite item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export function StackScene() {
  const stackRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start 96%', 'start 0%'],
  });
  const introX = useTransform(
    scrollYProgress,
    [0, 0.44, 1],
    reduceMotion ? [0, 0, 0] : [-48, -12, 0],
  );
  const introY = useTransform(
    scrollYProgress,
    [0, 0.44, 1],
    reduceMotion ? [0, 0, 0] : [30, 8, 0],
  );
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.44, 1],
    reduceMotion ? [1, 1, 1] : [0.3, 0.82, 1],
  );
  const topologyY = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    reduceMotion ? [0, 0, 0] : [72, 20, 0],
  );
  const topologyRotateX = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    reduceMotion ? [0, 0, 0] : [2.4, 0.45, 0],
  );
  const topologyScale = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    reduceMotion ? [1, 1, 1] : [0.96, 0.988, 1],
  );
  const topologyOpacity = useTransform(
    scrollYProgress,
    [0, 0.42, 1],
    reduceMotion ? [1, 1, 1] : [0.28, 0.84, 1],
  );

  return (
    <motion.section
      ref={stackRef}
      id="stack"
      data-scene="stack"
      className="stage stack-stage"
      aria-labelledby="stack-title"
    >
      <div className="stack-stage__layout">
        <motion.header
          className="stack-stage__intro"
          style={{ x: introX, y: introY, opacity: introOpacity }}
        >
          <p>Technology</p>
          <h2 id="stack-title">TypeScript at the core.</h2>
          <span>React and Angular product systems, carried through delivery.</span>
        </motion.header>

        <motion.div
          className="stack-topology"
          style={{
            y: topologyY,
            rotateX: topologyRotateX,
            scale: topologyScale,
            opacity: topologyOpacity,
            transformPerspective: 1600,
          }}
        >
          <span className="stack-topology__frame" aria-hidden="true" />
          <span className="stack-topology__ring stack-topology__ring--outer" aria-hidden="true" />
          <span className="stack-topology__ring stack-topology__ring--inner" aria-hidden="true" />

          <div className="stack-stage__core" aria-label="Core technologies">
            {coreTools.map((item) => (
              <div
                className={`stack-core-node stack-core-node--${item.id}`}
                key={item.id}
              >
                <i aria-hidden="true"><TechGlyph id={item.id} /></i>
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>

          <div className="stack-stage__clusters">
            <StackCluster
              index="A"
              label="Product"
              items={productTools}
              position="product"
            />
            <StackCluster
              index="B"
              label="Architecture"
              items={applicationTools}
              position="architecture"
            />
            <StackCluster
              index="C"
              label="Delivery"
              items={deliveryTools}
              position="delivery"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
