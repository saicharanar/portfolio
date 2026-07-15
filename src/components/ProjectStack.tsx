import { Children, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

type ProjectStackProps = {
  children: ReactNode;
  startIndex?: number;
};

type ProjectStackItemProps = {
  children: ReactNode;
  index: number;
};

type ProjectArrivalProfile = {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
  scale: number;
  opacity: number;
};

const projectArrivalProfiles: readonly ProjectArrivalProfile[] = [
  { x: 0, y: 82, rotateX: 3.8, rotateY: 0, scale: 0.965, opacity: 0.38 },
  { x: -26, y: 68, rotateX: 2.4, rotateY: 0.8, scale: 0.972, opacity: 0.44 },
  { x: 22, y: 74, rotateX: 2.8, rotateY: -0.72, scale: 0.97, opacity: 0.4 },
  { x: 0, y: 58, rotateX: 3.1, rotateY: 0, scale: 0.976, opacity: 0.5 },
  { x: -18, y: 64, rotateX: 2.1, rotateY: 0.52, scale: 0.978, opacity: 0.48 },
  { x: 16, y: 60, rotateX: 2.3, rotateY: -0.46, scale: 0.98, opacity: 0.52 },
];

function getProjectArrivalProfile(index: number) {
  return projectArrivalProfiles[index % projectArrivalProfiles.length];
}

function ProjectStackItem({ children, index }: ProjectStackItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const arrivalProfile = getProjectArrivalProfile(index);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 94%', 'start 0%'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [0, 0, 0] : [arrivalProfile.x, arrivalProfile.x * 0.2, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [0, 0, 0] : [arrivalProfile.y, arrivalProfile.y * 0.22, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [0, 0, 0] : [arrivalProfile.rotateX, arrivalProfile.rotateX * 0.2, 0],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [0, 0, 0] : [arrivalProfile.rotateY, arrivalProfile.rotateY * 0.2, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [1, 1, 1] : [arrivalProfile.scale, 0.994, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.42, 1],
    reduceMotion ? [1, 1, 1] : [arrivalProfile.opacity, 0.9, 1],
  );

  return (
    <div
      ref={itemRef}
      className="project-stack-item"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="project-stack-surface"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          scale,
          opacity,
          transformPerspective: 1600,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ProjectStack({ children, startIndex = 0 }: ProjectStackProps) {
  return (
    <div className="project-card-stack">
      {Children.map(children, (child, index) => (
        <ProjectStackItem index={startIndex + index}>{child}</ProjectStackItem>
      ))}
    </div>
  );
}
