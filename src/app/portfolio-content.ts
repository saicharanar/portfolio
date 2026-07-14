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
    background: '#171923',
  },
  {
    id: 'professional',
    area: 'professional',
    label: 'Professional work',
    tone: 'dark',
    background: '#171923',
  },
  {
    id: 'modmed',
    area: 'professional',
    label: 'ModMed',
    tone: 'dark',
    background: '#263a47',
  },
  {
    id: 'thoughtworks',
    area: 'professional',
    label: 'ThoughtWorks',
    tone: 'dark',
    background: '#423b4c',
  },
  {
    id: 'independent',
    area: 'independent',
    label: 'Independent work',
    tone: 'dark',
    background: '#211d29',
  },
  {
    id: 'actionkit',
    area: 'independent',
    label: 'ActionKit',
    tone: 'light',
    background: '#b4b2c4',
  },
  {
    id: 'anchor',
    area: 'independent',
    label: 'Anchor',
    tone: 'dark',
    background: '#2f5168',
  },
  {
    id: 'relay',
    area: 'independent',
    label: 'Relay',
    tone: 'dark',
    background: '#382c3d',
  },
  {
    id: 'glide',
    area: 'independent',
    label: 'Glide',
    tone: 'light',
    background: '#afc0cb',
  },
  {
    id: 'stack',
    area: 'technology',
    label: 'Technology',
    tone: 'dark',
    background: '#171923',
  },
  {
    id: 'contact',
    area: 'contact',
    label: 'Contact',
    tone: 'dark',
    background: '#1d1823',
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
