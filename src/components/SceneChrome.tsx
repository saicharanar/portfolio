import { motion } from 'motion/react';

type SceneChromeProps = {
  index: string;
  label: string;
  align?: 'start' | 'end';
};

export function SceneChrome({ index, label, align = 'start' }: SceneChromeProps) {
  return (
    <motion.div
      className={`scene-chrome scene-chrome--${align}`}
      aria-hidden="true"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="scene-chrome__index">{index}</span>
      <span className="scene-chrome__label">{label}</span>
      <motion.span
        className="scene-chrome__rail"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.86, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="scene-chrome__corner" />
    </motion.div>
  );
}
