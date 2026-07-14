import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { TechGlyph, type TechItem } from '../components/TechSignature';

const coreTools = [
  { id: 'react', label: 'React' },
  { id: 'angular', label: 'Angular' },
  { id: 'typescript', label: 'TypeScript' },
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

type ToolNameProps = {
  item: TechItem;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
};

function ToolName({ item, index, progress, reduceMotion }: ToolNameProps) {
  const revealStart = 0.1 + index * 0.038;
  const revealEnd = Math.min(revealStart + 0.24, 0.96);
  const opacity = useTransform(
    progress,
    [revealStart, revealEnd],
    reduceMotion ? [1, 1] : [0, 1],
  );
  const y = useTransform(
    progress,
    [revealStart, revealEnd],
    reduceMotion ? [0, 0] : [24, 0],
  );
  const scale = useTransform(
    progress,
    [revealStart, revealEnd],
    reduceMotion ? [1, 1] : [0.97, 1],
  );

  return (
    <motion.span
      className="stack-tool"
      style={{
        opacity,
        y,
        scale,
      }}
    >
      <i
        aria-hidden="true"
        style={{ animationDelay: `${index * -420}ms` }}
      >
        <TechGlyph id={item.id} />
      </i>
      <strong>{item.label}</strong>
    </motion.span>
  );
}

export function StackScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });
  const progress = scrollYProgress;
  const contextOpacity = useTransform(
    progress,
    [0.02, 0.2],
    reduceMotion ? [1, 1] : [0, 1],
  );
  const contextY = useTransform(
    progress,
    [0.02, 0.2],
    reduceMotion ? [0, 0] : [24, 0],
  );

  return (
    <motion.section
      ref={sectionRef}
      id="stack"
      data-scene="stack"
      className="stage stack-stage"
      initial={false}
      aria-labelledby="stack-title"
    >
      <h2 id="stack-title" className="visually-hidden">Technologies used across the work</h2>

      <motion.p
        className="stack-stage__context"
        style={{ opacity: contextOpacity, y: contextY }}
      >
        Three foundations. Product systems, architecture, and delivery around them.
      </motion.p>

      <div className="stack-stage__core">
        {coreTools.map((item, index) => (
          <ToolName
            item={item}
            index={index}
            key={item.id}
            progress={progress}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <div className="stack-stage__supporting">
        <div className="stack-stage__row stack-stage__row--product">
          {productTools.map((item, index) => (
            <ToolName
              item={item}
              index={index + 3}
              key={item.id}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
        <div className="stack-stage__row stack-stage__row--application">
          {applicationTools.map((item, index) => (
            <ToolName
              item={item}
              index={index + 7}
              key={item.id}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
        <div className="stack-stage__row stack-stage__row--delivery">
          {deliveryTools.map((item, index) => (
            <ToolName
              item={item}
              index={index + 12}
              key={item.id}
              progress={progress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
