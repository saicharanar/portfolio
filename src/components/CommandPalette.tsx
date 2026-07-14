import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { SceneTone } from '../app/portfolio-content';

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  tone: SceneTone;
  background: string;
};

type Command = {
  id: string;
  label: string;
  context: string;
  href: string;
  isExternal?: boolean;
};

const commands: readonly Command[] = [
  { id: 'top', label: 'Opening', context: 'start here', href: '#top' },
  { id: 'professional', label: 'Professional work', context: 'ModMed and ThoughtWorks', href: '#professional' },
  { id: 'modmed', label: 'ModMed', context: 'Patient check-in, 2025 to now', href: '#modmed' },
  { id: 'thoughtworks', label: 'ThoughtWorks', context: 'Device management, 2021 to 2025', href: '#thoughtworks' },
  { id: 'independent', label: 'Independent work', context: 'ActionKit, Anchor, Relay, and Glide', href: '#independent' },
  { id: 'actionkit', label: 'ActionKit', context: 'React library', href: '#actionkit' },
  { id: 'anchor', label: 'Anchor', context: 'Local-first planner', href: '#anchor' },
  { id: 'relay', label: 'Relay', context: 'macOS menu bar utility', href: '#relay' },
  { id: 'glide', label: 'Glide', context: 'TypeScript recording CLI', href: '#glide' },
  { id: 'contact', label: 'Say hello', context: 'contact', href: '#contact' },
  { id: 'email', label: 'Email Sai Charan', context: 'mailto', href: 'mailto:saicharan.abbireddy@gmail.com' },
  { id: 'resume', label: 'Open résumé', context: 'PDF', href: '/resume.pdf', isExternal: true },
  { id: 'github', label: 'GitHub', context: 'saicharanar', href: 'https://github.com/saicharanar', isExternal: true },
  { id: 'linkedin', label: 'LinkedIn', context: 'profile', href: 'https://linkedin.com/in/saicharanabbireddy', isExternal: true },
];

export function CommandPalette({
  isOpen,
  onClose,
  triggerRef,
  tone,
  background,
}: CommandPaletteProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.context}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const trigger = triggerRef.current;
    document.body.classList.add('palette-open');
    window.setTimeout(() => inputRef.current?.focus(), 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = canvasRef.current?.querySelectorAll<HTMLElement>(
        'input, a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('palette-open');
      trigger?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  const moveSelection = (direction: number) => {
    if (!filteredCommands.length) return;
    setSelectedIndex((current) =>
      (current + direction + filteredCommands.length) % filteredCommands.length,
    );
  };

  const getColumnCount = () =>
    window.matchMedia('(max-width: 47rem)').matches ? 1 : 2;

  const runCommand = (command: Command | undefined) => {
    if (!command) return;
    onClose();
    if (command.isExternal) {
      window.open(command.href, '_blank', 'noopener,noreferrer');
      return;
    }
    window.location.href = command.href;
  };

  return createPortal(
    <AnimatePresence
      onExitComplete={() => {
        setQuery('');
        setSelectedIndex(0);
      }}
    >
      {isOpen ? (
        <motion.div
          className="palette-layer"
          data-tone={tone}
          style={{ '--palette-scene': background } as CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={canvasRef}
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 0.78, 0.24, 1] }}
          >
            <button className="palette-close" type="button" onClick={onClose}>
              Close <kbd>esc</kbd>
            </button>
            <p className="palette-overline">Jump to a project or contact.</p>
            <h2 id="command-palette-title" className="visually-hidden">Command palette</h2>
            <div className="palette-search">
              <span aria-hidden="true">⌘</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    moveSelection(getColumnCount());
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    moveSelection(-getColumnCount());
                  } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    moveSelection(1);
                  } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    moveSelection(-1);
                  } else if (event.key === 'Enter') {
                    event.preventDefault();
                    runCommand(filteredCommands[selectedIndex]);
                  }
                }}
                aria-label="Search commands"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="true"
                aria-controls="command-palette-results"
                aria-activedescendant={
                  filteredCommands[selectedIndex]
                    ? `command-${filteredCommands[selectedIndex].id}`
                    : undefined
                }
                placeholder="Type anything"
              />
            </div>

            <div id="command-palette-results" className="palette-results" role="listbox">
              {filteredCommands.map((command, index) => (
                <a
                  id={`command-${command.id}`}
                  key={command.id}
                  className={index === selectedIndex ? 'is-selected' : undefined}
                  href={command.href}
                  target={command.isExternal ? '_blank' : undefined}
                  rel={command.isExternal ? 'noreferrer' : undefined}
                  role="option"
                  aria-selected={index === selectedIndex}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={onClose}
                >
                  <span>{command.label}</span>
                  <small>{command.context}</small>
                </a>
              ))}
              {!filteredCommands.length ? (
                <p className="palette-empty">No match. Try “Anchor” or “contact”.</p>
              ) : null}
            </div>

            <p className="palette-help">Arrow keys choose. Enter opens.</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
