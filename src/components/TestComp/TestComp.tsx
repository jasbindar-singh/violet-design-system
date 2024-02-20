type TestCompPropsType = {
  type: "primary" | "secondary";
};

const TestComp = ({ type }: TestCompPropsType) => {
  return <div className="text-xl">{type}</div>;
};

export default TestComp;
