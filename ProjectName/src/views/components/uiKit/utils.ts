import { ThemeManager } from 'theme/ThemeManager.ts';

export const getDebugStyle = (theme: typeof ThemeManager) => ({
  borderWidth: 1,
  borderColor: theme.colors.stroke.separatorPrimary,
});
