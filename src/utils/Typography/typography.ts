export enum FontWeight {
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold',
}

export enum FontAlignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export const getTypoWeightClassName = (weight: FontWeight) => {
  switch (weight) {
    case FontWeight.NORMAL:
      return 'font-normal';
    case FontWeight.MEDIUM:
      return 'font-medium';
    case FontWeight.SEMIBOLD:
      return 'font-semibold';
    case FontWeight.BOLD:
      return 'font-bold';
  }
};

export const getTypoAlignmentClassName = (alignment: FontAlignment) => {
  switch (alignment) {
    case FontAlignment.LEFT:
      return 'text-left';
    case FontAlignment.CENTER:
      return 'text-center';
    case FontAlignment.RIGHT:
      return 'text-right';
  }
};
