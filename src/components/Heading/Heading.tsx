import classNames from "classnames";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  weight?: "normal" | "medium" | "semibold" | "bold";
  size: "small" | "medium" | "large" | "xlarge";
  alignment?: "left" | "right" | "center";
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

const getTypoWeightClassName = (weight: string | undefined) => {
  switch (weight) {
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    default:
      return "";
  }
};

const getTypoAlignmentClassName = (alignment: string | undefined) => {
  switch (alignment) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "";
  }
};

const Heading = (props: HeadingProps) => {
  const {
    as = "h1",
    weight,
    size,
    alignment,
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
