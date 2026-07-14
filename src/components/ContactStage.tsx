import { motion } from 'motion/react';
import { contactLinks } from '../app/portfolio-content';

export function ContactStage() {
  return (
    <motion.footer
      id="contact"
      data-scene="contact"
      className="stage contact-stage"
      initial={false}
    >
      <motion.div
        className="contact-stage__content"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.24 }}
        transition={{ duration: 0.58, ease: [0.22, 0.78, 0.24, 1] }}
      >
        <p className="contact-stage__lead">
          <span>That’s the work.</span>
          <span>This is the door.</span>
        </p>
        <h2>Say hello.</h2>
        <a className="contact-stage__email" href="mailto:saicharan.abbireddy@gmail.com">
          saicharan.abbireddy@gmail.com
        </a>

        <nav className="contact-stage__links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noreferrer' : undefined}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">{link.isExternal ? '↗' : '↓'}</span>
            </a>
          ))}
        </nav>
      </motion.div>

      <p className="contact-stage__fineprint">Hyderabad, India</p>
    </motion.footer>
  );
}
