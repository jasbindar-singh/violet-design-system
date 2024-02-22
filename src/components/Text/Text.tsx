import classNames from "classnames";
import {
  FontAlignment,
  FontWeight,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from "../../utils/Typography/typography";

type TextProps = {
  size: "small" | "medium" | "large";
  weight?: FontWeight;
  alignment?: FontAlignment;
  customClassNames?: string;
  children: React.ReactNode;
};

const getTextSizeClassName = (size: string) => {
  switch (size) {
    case "xsmall":
      return "text-xs";
    case "small":
      return "text-sm";
    case "medium":
      return "text-md";
    default:
      return "";
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
