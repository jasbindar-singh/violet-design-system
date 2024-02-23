export const FONT_WEIGHT = {
  NORMAL: 'normal',
  MEDIUM: 'medium',
  SEMIBOLD: 'semibold',
  BOLD: 'bold',
} as const;

export const FONT_ALIGNMENT = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
} as const;

export type FontWeightType = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT];
export type FontAlignmentType =
  (typeof FONT_ALIGNMENT)[keyof typeof FONT_ALIGNMENT];

export const getTypoWeightClassName = (weight: FontWeightType) => {
  switch (weight) {
    case FONT_WEIGHT.NORMAL:
      return 'font-normal';
    case FONT_WEIGHT.MEDIUM:
      return 'font-medium';
    case FONT_WEIGHT.SEMIBOLD:
      return 'font-semibold';
    case FONT_WEIGHT.BOLD:
      return 'font-bold';
  }
};

export const getTypoAlignmentClassName = (alignment: FontAlignmentType) => {
  switch (alignment) {
    case FONT_ALIGNMENT.LEFT:
      return 'text-left';
    case FONT_ALIGNMENT.CENTER:
      return 'text-center';
    case FONT_ALIGNMENT.RIGHT:
      return 'text-right';
  }
};
