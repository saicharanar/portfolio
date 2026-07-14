import { Children, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

type ProjectStackProps = {
  children: ReactNode;
};

type ProjectStackItemProps = {
  children: ReactNode;
  index: number;
};

function ProjectStackItem({ children, index }: ProjectStackItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start 94%', 'start 8%'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [0, 0, 0] : [84, 18, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    reduceMotion ? [1, 1, 1] : [0.972, 0.992, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.42, 1],
    reduceMotion ? [1, 1, 1] : [0.56, 0.92, 1],
  );

  return (
    <div
      ref={itemRef}
      className="project-stack-item"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="project-stack-surface"
        style={{ y, scale, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ProjectStack({ children }: ProjectStackProps) {
  return (
    <div className="project-card-stack">
      {Children.map(children, (child, index) => (
        <ProjectStackItem index={index}>{child}</ProjectStackItem>
      ))}
    </div>
  );
}
