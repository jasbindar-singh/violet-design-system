import classNames from 'classnames';
import {
  FontAlignment,
  FontWeight,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from '../../utils/Typography/typography';

enum HeadingSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  weight?: FontWeight;
  size: HeadingSize;
  alignment?: FontAlignment;
  customClassNames?: string;
  children: React.ReactNode;
};

const getHeadingSizeClassName = (size: HeadingSize) => {
  switch (size) {
    case HeadingSize.SMALL:
      return 'text-lg';
    case HeadingSize.MEDIUM:
      return 'text-xl';
    case HeadingSize.LARGE:
      return 'text-2xl';
    case HeadingSize.XLARGE:
      return 'text-3xl';
  }
};

const Heading = (props: HeadingProps) => {
  const {
    as = 'h1',
    weight = FontWeight.NORMAL,
    size,
    alignment = FontAlignment.LEFT,
    customClassNames,
    children,
  } = props;

  const As = as;
  const headingClassnames = classNames(
    getHeadingSizeClassName(size),
    getTypoAlignmentClassName(alignment),
    getTypoWeightClassName(weight),
    customClassNames
  );

  return <As className={headingClassnames}>{children}</As>;
};

export default Heading;
