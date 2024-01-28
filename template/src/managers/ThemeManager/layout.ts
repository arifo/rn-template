import { s } from 'utils/scaler.ts';

import { LayoutType, SpacingType } from './types.ts';

export const spacing: SpacingType = {
  s: s(8),
  m: s(12),
  l: s(20),
  xl: s(28),
  xxl: s(36),
};

const BorderRadius = {
  main: 12,
};

const DEFAULT_GAP_MULTIPLIER = 1;
export class LayoutManager implements LayoutType {
  public borderRadius = BorderRadius;

  scale(size: number, factor?: number) {
    return s(size, factor);
  }
  gap(multiplier?: number) {
    const DEFAULT_GAP_SIZE = 8;
    return this.scale(DEFAULT_GAP_SIZE * (multiplier || DEFAULT_GAP_MULTIPLIER));
  }
}
