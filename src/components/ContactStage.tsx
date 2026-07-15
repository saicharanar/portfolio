import { useRef } from 'react';
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { contactLinks } from '../app/portfolio-content';

const contactIconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Résumé: FileText,
} as const;

export function ContactStage() {
  const contactRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start 96%', 'start 0%'],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.54, 0.82, 1],
    reduceMotion ? [0, 0, 0, 0] : [90, 58, 18, 0],
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.54, 0.82, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.96, 0.975, 0.993, 1],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.54, 0.82, 1],
    reduceMotion ? [1, 1, 1, 1] : [0, 0.08, 0.72, 1],
  );
  return (
    <motion.footer
      ref={contactRef}
      id="contact"
      data-scene="contact"
      className="stage contact-stage"
    >
      <div className="contact-stage__layout">
        <motion.div
          className="contact-stage__content"
          style={{
            y: contentY,
            scale: contentScale,
            opacity: contentOpacity,
          }}
        >
          <p className="contact-stage__lead">Frontend engineering, product systems, and independent software.</p>
          <h2>Say hello.</h2>
          <a className="contact-stage__email" href="mailto:saicharan.abbireddy@gmail.com">
            saicharan.abbireddy@gmail.com
          </a>

          <nav className="contact-stage__links" aria-label="Contact links">
            {contactLinks.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </nav>
        </motion.div>
      </div>

      <p className="contact-stage__fineprint">Always open to a good problem</p>
    </motion.footer>
  );
}

type ContactLinkProps = {
  link: (typeof contactLinks)[number];
};

function ContactLink({ link }: ContactLinkProps) {
  const LinkIcon = contactIconByLabel[link.label];
  const ActionIcon = link.isExternal ? ArrowUpRight : Download;

  return (
    <a
      href={link.href}
      target={link.isExternal ? '_blank' : undefined}
      rel={link.isExternal ? 'noreferrer' : undefined}
    >
      <span className="contact-stage__link-label">
        <LinkIcon className="contact-stage__link-icon" aria-hidden="true" />
        <span>{link.label}</span>
      </span>
      <ActionIcon className="contact-stage__link-action" aria-hidden="true" />
    </a>
  );
}
