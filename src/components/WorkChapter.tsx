import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import type { SceneId } from '../app/portfolio-content';
import { SceneChrome } from './SceneChrome';

type WorkChapterProps = {
  id: Extract<SceneId, 'professional' | 'independent'>;
  eyebrow: string;
  heading: string;
  statement: string;
  projects: ReadonlyArray<{
    href: string;
    name: string;
    detail: string;
  }>;
};

type ChapterMotionProfile = {
  x: number[];
  y: number[];
  rotateX: number[];
  rotateY: number[];
  scale: number[];
  opacity: number[];
};

const chapterProgressStops = [0, 0.38, 0.78, 1];
const restingChapterProfile: ChapterMotionProfile = {
  x: [0, 0, 0, 0],
  y: [0, 0, 0, 0],
  rotateX: [0, 0, 0, 0],
  rotateY: [0, 0, 0, 0],
  scale: [1, 1, 1, 1],
  opacity: [1, 1, 1, 1],
};
const chapterMotionProfiles: Record<'professional' | 'independent', ChapterMotionProfile> = {
  professional: {
    x: [0, 0, 0, 0],
    y: [116, 30, 6, 0],
    rotateX: [3.6, 0.8, 0.15, 0],
    rotateY: [0, 0, 0, 0],
    scale: [0.95, 0.985, 0.998, 1],
    opacity: [0.42, 0.82, 0.98, 1],
  },
  independent: {
    x: [42, 14, 2, 0],
    y: [88, 24, 5, 0],
    rotateX: [2.6, 0.65, 0.12, 0],
    rotateY: [-1.2, -0.35, -0.06, 0],
    scale: [0.957, 0.988, 0.998, 1],
    opacity: [0.46, 0.84, 0.98, 1],
  },
};

export function WorkChapter({
  id,
  eyebrow,
  heading,
  statement,
  projects,
}: WorkChapterProps) {
  const chapterRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const isProfessional = id === 'professional';
  const chapterIndex = isProfessional ? '01' : '04';
  const motionProfile = reduceMotion ? restingChapterProfile : chapterMotionProfiles[id];
  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ['start 96%', 'end 96%'],
  });
  const surfaceX = useTransform(
    scrollYProgress,
    chapterProgressStops,
    motionProfile.x,
  );
  const surfaceY = useTransform(
    scrollYProgress,
    chapterProgressStops,
    motionProfile.y,
  );
  const surfaceRotateX = useTransform(
    scrollYProgress,
    chapterProgressStops,
    motionProfile.rotateX,
  );
  const surfaceRotateY = useTransform(
    scrollYProgress,
    chapterProgressStops,
    motionProfile.rotateY,
  );
  const surfaceScale = useTransform(
    scrollYProgress,
    chapterProgressStops,
    motionProfile.scale,
  );
  const surfaceOpacity = useTransform(
    scrollYProgress,
    [0, 0.34, 0.78, 1],
    motionProfile.opacity,
  );
  const leadingEdgeScale = useTransform(
    scrollYProgress,
    [0, 0.06, 0.56, 1],
    reduceMotion ? [1, 1, 1, 1] : [0, 0.3, 1, 1],
  );
  const leadingEdgeOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.68, 1],
    reduceMotion ? [0, 0, 0, 0] : [0, 1, 0.65, 0],
  );

  return (
    <section
      ref={chapterRef}
      id={id}
      data-scene={id}
      className={`stage work-chapter work-chapter--${id} work-chapter--armor-lock`}
    >
      <motion.div
        className="work-chapter__surface"
        style={{
          x: surfaceX,
          y: surfaceY,
          rotateX: surfaceRotateX,
          rotateY: surfaceRotateY,
          scale: surfaceScale,
          opacity: surfaceOpacity,
          transformPerspective: 1600,
        }}
      >
        <SceneChrome index={chapterIndex} label={`${eyebrow} / Chapter`} />

        <span className="work-chapter__leading-edge" aria-hidden="true">
          <motion.i
            style={{
              opacity: leadingEdgeOpacity,
              scaleX: leadingEdgeScale,
              transformOrigin: isProfessional ? '0 50%' : '100% 50%',
            }}
          />
        </span>

        <div className="work-chapter__content">
          <div className="work-chapter__heading">
            <p>{eyebrow}</p>
            <h2>{heading}</h2>
            <span>{statement}</span>
          </div>

          <nav className="work-chapter__projects" aria-label={`${heading} projects`}>
            {projects.map((project, index) => (
              <a
                key={project.href}
                href={project.href}
              >
                <b>{String(index + 1).padStart(2, '0')}</b>
                <span>{project.name}</span>
                <small>{project.detail}</small>
                <i aria-hidden="true">↘</i>
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </section>
  );
}
