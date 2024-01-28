import { ThemeManager } from 'managers/ThemeManager';

export const getDebugStyle = (theme: typeof ThemeManager) => ({
  borderWidth: 1,
  borderColor: theme.colors.stroke.separatorPrimary,
});
