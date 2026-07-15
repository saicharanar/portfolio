export type SceneId =
  | 'top'
  | 'professional'
  | 'modmed'
  | 'thoughtworks'
  | 'independent'
  | 'actionkit'
  | 'anchor'
  | 'relay'
  | 'glide'
  | 'stack'
  | 'contact';

export type SceneTone = 'light' | 'dark';
export type PortfolioArea = 'top' | 'professional' | 'independent' | 'technology' | 'contact';

export type SceneDefinition = {
  id: SceneId;
  area: PortfolioArea;
  label: string;
  tone: SceneTone;
  background: string;
};

export const scenes: readonly SceneDefinition[] = [
  {
    id: 'top',
    area: 'top',
    label: 'Opening',
    tone: 'dark',
    background: '#070b0f',
  },
  {
    id: 'professional',
    area: 'professional',
    label: 'Professional work',
    tone: 'dark',
    background: '#070b0f',
  },
  {
    id: 'modmed',
    area: 'professional',
    label: 'ModMed',
    tone: 'dark',
    background: '#10191d',
  },
  {
    id: 'thoughtworks',
    area: 'professional',
    label: 'ThoughtWorks',
    tone: 'dark',
    background: '#11171a',
  },
  {
    id: 'independent',
    area: 'independent',
    label: 'Independent work',
    tone: 'dark',
    background: '#0b1013',
  },
  {
    id: 'actionkit',
    area: 'independent',
    label: 'ActionKit',
    tone: 'dark',
    background: '#0b1518',
  },
  {
    id: 'anchor',
    area: 'independent',
    label: 'Anchor',
    tone: 'dark',
    background: '#0c1418',
  },
  {
    id: 'relay',
    area: 'independent',
    label: 'Relay',
    tone: 'dark',
    background: '#0c1210',
  },
  {
    id: 'glide',
    area: 'independent',
    label: 'Glide',
    tone: 'dark',
    background: '#0b1116',
  },
  {
    id: 'stack',
    area: 'technology',
    label: 'Technology',
    tone: 'dark',
    background: '#070b0f',
  },
  {
    id: 'contact',
    area: 'contact',
    label: 'Contact',
    tone: 'dark',
    background: '#080d10',
  },
] as const;

export const sceneById = Object.fromEntries(
  scenes.map((scene) => [scene.id, scene]),
) as Record<SceneId, SceneDefinition>;

export const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/saicharanar',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/saicharanabbireddy',
    isExternal: true,
  },
  { label: 'Résumé', href: '/resume.pdf', isExternal: false },
] as const;
