import classNames from "classnames";
import {
  FontAlignment,
  FontWeight,
  getTypoAlignmentClassName,
  getTypoWeightClassName,
} from "../../utils/Typography/typography";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  weight?: FontWeight;
  size: "small" | "medium" | "large" | "xlarge";
  alignment?: FontAlignment;
  customClassNames?: string;
  children: React.ReactNode;
};

const getHeadingSizeClassName = (size: string) => {
  switch (size) {
    case "small":
      return "text-lg";
    case "medium":
      return "text-xl";
    case "large":
      return "text-2xl";
    case "xlarge":
      return "text-3xl";
    default:
      return "";
  }
};

const Heading = (props: HeadingProps) => {
  const {
    as = "h1",
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
