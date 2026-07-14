import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';
import type { SceneId } from '../app/portfolio-content';

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

export function WorkChapter({ id, eyebrow, heading, statement, projects }: WorkChapterProps) {
  const chapterRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ['start end', 'start 38%'],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [40, 0],
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0.992, 1],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    reduceMotion ? [1, 1, 1] : [0.38, 0.88, 1],
  );

  return (
    <motion.section
      ref={chapterRef}
      id={id}
      data-scene={id}
      className={`stage work-chapter work-chapter--${id}`}
      initial={false}
    >
      <motion.div
        className="work-chapter__content"
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
      >
        <div className="work-chapter__heading">
          <p>{eyebrow}</p>
          <h2>{heading}</h2>
          <span>{statement}</span>
        </div>

        <nav className="work-chapter__projects" aria-label={`${heading} projects`}>
          {projects.map((project) => (
            <a
              key={project.href}
              href={project.href}
            >
              <span>{project.name}</span>
              <small>{project.detail}</small>
              <i aria-hidden="true">↘</i>
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.section>
  );
}
