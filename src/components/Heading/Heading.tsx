import classNames from 'classnames';
import {
  FONT_ALIGNMENT,
  FONT_WEIGHT,
  FontAlignmentType,
  FontWeightType,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from '../../utils/Typography/typography';

const HEADING_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
} as const;

type HeadingSizeType = (typeof HEADING_SIZE)[keyof typeof HEADING_SIZE];

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  weight?: FontWeightType;
  size: HeadingSizeType;
  alignment?: FontAlignmentType;
  customClassNames?: string;
  children: React.ReactNode;
};

const getHeadingSizeClassName = (size: HeadingSizeType) => {
  switch (size) {
    case HEADING_SIZE.SMALL:
      return 'text-lg';
    case HEADING_SIZE.MEDIUM:
      return 'text-xl';
    case HEADING_SIZE.LARGE:
      return 'text-2xl';
    case HEADING_SIZE.XLARGE:
      return 'text-3xl';
  }
};

const Heading = (props: HeadingProps) => {
  const {
    as = 'h1',
    weight = FONT_WEIGHT.NORMAL,
    size,
    alignment = FONT_ALIGNMENT.LEFT,
    customClassNames,
    children,
  } = props;

  const As = as;
  const headingClassnames = classNames(
    getHeadingSizeClassName(size),
    getTypoAlignmentClassName(alignment),
    getTypoWeightClassName(weight),
    'text-black',
    customClassNames
  );

  return <As className={headingClassnames}>{children}</As>;
};

export default Heading;
