import Dropdown from '.';

const meta = { component: Dropdown };

export default meta;

export const DropDownClosed = {
  args: {
    label: 'Dropdown Closed',
    dataList: [
      { label: 'Option1', value: 'Option1' },
      { label: 'Option2', value: 'Option2' },
    ],
    onChange: () => {},
  },
};
