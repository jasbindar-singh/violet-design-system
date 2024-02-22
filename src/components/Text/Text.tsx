import classNames from 'classnames';
import {
  FontAlignment,
  FontWeight,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from '../../utils/Typography/typography';

enum TextSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
}

type TextProps = {
  size: TextSize;
  weight?: FontWeight;
  alignment?: FontAlignment;
  customClassNames?: string;
  children: React.ReactNode;
};

const getTextSizeClassName = (size: TextSize) => {
  switch (size) {
    case TextSize.XSMALL:
      return 'text-xs';
    case TextSize.SMALL:
      return 'text-sm';
    case TextSize.MEDIUM:
      return 'text-md';
  }
};

const Text = (props: TextProps) => {
  const {
    size,
    weight = FontWeight.NORMAL,
    alignment = FontAlignment.LEFT,
    customClassNames,
    children,
  } = props;

  const headingClassnames = classNames(
    getTextSizeClassName(size),
    getTypoAlignmentClassName(alignment),
    getTypoWeightClassName(weight),
    customClassNames
  );

  return <p className={headingClassnames}>{children}</p>;
};

export default Text;
