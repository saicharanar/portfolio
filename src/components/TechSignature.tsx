import {
  Accessibility,
  Activity,
  Boxes,
  Container,
  GitBranch,
  Network,
  TestTube2,
  Workflow,
} from 'lucide-react';

export type TechId =
  | 'accessibility'
  | 'angular'
  | 'ci-cd'
  | 'design-systems'
  | 'docker'
  | 'electron'
  | 'elf'
  | 'github-actions'
  | 'indexed-db'
  | 'micro-frontends'
  | 'ngrx'
  | 'node'
  | 'playwright'
  | 'react'
  | 'redux'
  | 'rtk-query'
  | 'rxjs'
  | 'rest-api'
  | 'testing'
  | 'typescript'
  | 'vitest'
  | 'zustand';

export type TechItem = {
  id: TechId;
  label: string;
};

export function TechGlyph({ id }: { id: TechId }) {
  const conceptIconProps = {
    'aria-hidden': true,
    fill: 'none',
    strokeWidth: 1.7,
  } as const;

  if (id === 'design-systems') {
    return <Boxes {...conceptIconProps} />;
  }

  if (id === 'accessibility') {
    return <Accessibility {...conceptIconProps} />;
  }

  if (id === 'rest-api') {
    return <Network {...conceptIconProps} />;
  }

  if (id === 'testing') {
    return <TestTube2 {...conceptIconProps} />;
  }

  if (id === 'docker') {
    return <Container {...conceptIconProps} />;
  }

  if (id === 'ci-cd') {
    return <Workflow {...conceptIconProps} />;
  }

  if (id === 'rxjs') {
    return <Activity {...conceptIconProps} />;
  }

  if (id === 'ngrx') {
    return <GitBranch {...conceptIconProps} />;
  }

  if (id === 'react') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.35" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="13" ry="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="16" cy="16" rx="13" ry="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 16 16)" />
      </svg>
    );
  }

  if (id === 'redux' || id === 'rtk-query') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M8 20.5c2.7 3.6 8.5 4.8 12.5 2.2 3.2-2 4.7-6.1 3.1-9.7M9.2 12.1c1.2-4 5.7-6.6 9.9-5.4 2 .6 3.6 1.8 4.6 3.4M7.1 17.4c-1-1.3-1.2-3.2-.2-4.6 1.1-1.5 3.1-2 4.7-1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <circle cx="7.4" cy="21" r="2.3" fill="currentColor" />
        <circle cx="24.5" cy="11.7" r="2.3" fill="currentColor" />
        <circle cx="11.7" cy="11.7" r="2.3" fill="currentColor" />
      </svg>
    );
  }

  if (id === 'typescript' || id === 'node') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        {id === 'node' ? (
          <path d="M16 3.5 27 9.8v12.4L16 28.5 5 22.2V9.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        ) : (
          <rect x="4" y="4" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        )}
        <text x="16" y="20.4" fill="currentColor" fontFamily="ui-sans-serif, sans-serif" fontSize="9.2" fontWeight="700" textAnchor="middle">
          {id === 'node' ? 'JS' : 'TS'}
        </text>
      </svg>
    );
  }

  if (id === 'angular') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.5 27 7.4l-1.7 15L16 28.5 6.7 22.4 5 7.4Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m10.7 22 5.3-13 5.3 13M12.8 17h6.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (id === 'electron') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.2" fill="currentColor" />
        <path d="M7.5 9.4c5.8-3.8 14.5-.5 18.1 6.4 3.1 6-1.3 10.3-7.4 10M24.2 8.3c-1.7-4.2-7.8-4.9-12.7-.8-4.5 3.8-6.3 10.8-3.2 15.3M5.8 15.1c-3.8 3.1-1.2 8.4 4.7 10.3 6.5 2.1 14.5-1.9 16.5-7.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (id === 'indexed-db') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6 8v8c0 2.2 4.5 4 10 4s10-1.8 10-4V8M6 16v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (id === 'github-actions') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="9" cy="8" r="2.4" fill="currentColor" />
        <circle cx="9" cy="24" r="2.4" fill="currentColor" />
        <circle cx="23" cy="16" r="2.4" fill="currentColor" />
        <path d="M9 10.5v4.3c0 5.4 3.4 8.4 8.6 8.4M9 10.5v1.2c0 2.8 2.6 4.3 6.1 4.3h5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (id === 'playwright') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 8.5c4.1-1.7 8-1.3 11.2.5l-1.3 12.6c-3.7 3-8.7 1.2-9.2-3.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 7.2c4.1-1.1 7.8-.3 10.7 2l.6 9.4c-2 4.4-7.3 5.2-10.7 2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.2 13.8h3M19.5 13h3M8.8 18.4c1.5 1.1 2.9 1.2 4.3.1M19.1 18.1c1.4.8 2.8.7 4.1-.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    );
  }

  if (id === 'micro-frontends') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="5" width="10" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="18" y="5" width="10" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <rect x="4" y="18" width="24" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (id === 'vitest') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m6 7 10 20L26 7M11 7h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="m16 3-3 7h4l-2 6 5-8h-4l2-5Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === 'zustand') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 8h20L9 24h17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m16 4 3.2 7.3L27 12l-5.8 5.2 1.7 7.6L16 21l-6.9 3.8 1.7-7.6L5 12l7.8-.7Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}
