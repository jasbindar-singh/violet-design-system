import classNames from 'classnames';
import {
  FONT_ALIGNMENT,
  FONT_WEIGHT,
  FontAlignmentType,
  FontWeightType,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from '../../utils/Typography/typography';

const TEXT_SIZE = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

type TextSizeType = (typeof TEXT_SIZE)[keyof typeof TEXT_SIZE];

type TextProps = {
  size: TextSizeType;
  weight?: FontWeightType;
  alignment?: FontAlignmentType;
  customClassNames?: string;
  children: React.ReactNode;
};

const getTextSizeClassName = (size: TextSizeType) => {
  switch (size) {
    case TEXT_SIZE.XSMALL:
      return 'text-xs';
    case TEXT_SIZE.SMALL:
      return 'text-sm';
    case TEXT_SIZE.MEDIUM:
      return 'text-md';
  }
};

const Text = (props: TextProps) => {
  const {
    size,
    weight = FONT_WEIGHT.NORMAL,
    alignment = FONT_ALIGNMENT.LEFT,
    customClassNames,
    children,
  } = props;

  const headingClassnames = classNames(
    getTextSizeClassName(size),
    getTypoAlignmentClassName(alignment),
    getTypoWeightClassName(weight),
    'text-black',
    customClassNames
  );

  return <p className={headingClassnames}>{children}</p>;
};

export default Text;
