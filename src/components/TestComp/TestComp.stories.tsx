import TestComp from "./TestComp";

const meta = {
  component: TestComp,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export default meta;

export const Button = {
  args: {
    type: "primary",
  },
};
