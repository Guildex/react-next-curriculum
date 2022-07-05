export const ICON_NAMES = {
  REACT: 'REACT',
  TEST: 'TEST',
  DOCKER: 'DOCKER',
} as const;

export type IconName = keyof typeof ICON_NAMES;
