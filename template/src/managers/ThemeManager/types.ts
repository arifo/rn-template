export type SpacingType = {
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export type LayoutType = {
  borderRadius: { main: number };
  scale: (size: number, factor?: number) => number;
  gap: (multiplier?: number) => number;
};

export type ColorProps = {
  scheme: string;
  text: {
    primary: string;
    headline: string;
    subhead: string;
    secondary: string;
    tertiary: string;
    muted: string;
    contrast: string;
    textLink: string;
    textLinkVisited: string;
    accent: string;
    positive: string;
    warning: string;
    negative: string;
    linkContrast: string;
  };
  icon: {
    accent: string;
    primary: string;
    secondary: string;
    tertiary: string;
    medium: string;
    mediumAlpha: string;
    tertiaryAlpha: string;
    contrast: string;
    positive: string;
    warning: string;
    negative: string;
  };
  background: {
    primary: string;
    secondary: string;
    secondaryAlpha: string;
    card: string;
    modal: string;
    modalInverse: string;
    buttonPrimary: string;
    buttonSecondary: string;
    buttonTertiary: string;
    accent: string;
    accentTint: string;
    accentTintAlpha: string;
    positive: string;
    positiveTint: string;
    negative: string;
    negativeTint: string;
    warning: string;
    warningTint: string;
    selected: string;
  };
  stroke: {
    separatorPrimary: string;
    separatorSecondary: string;
    separatorPrimaryAlpha: string;
    imageBorderAlpha: string;
    accent: string;
    positive: string;
    warning: string;
    negative: string;
    contrast: string;
    fieldBorderAlfa: string;
    fieldBorderEnabled: string;
    fieldBorderFocus: string;
    fieldBorderDisabled: string;
  };
  other: {
    overlayPrimary: string;
    imagePlaceholder: string;
    trackBufferAccent: string;
    trackBufferAccentTint: string;
    trackBufferPositive: string;
    trackBackground: string;
    skeletonTo: string;
    skeletonFrom: string;
  };
  navigation: {
    background: string;
    activeText: string;
    inactiveText: string;
  };
};
