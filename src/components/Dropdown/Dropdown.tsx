import classNames from 'classnames';
import ArrowBottom from '../Icon/ArrowBottom';
import { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

type DropdownPropType = {
  label: string;
  dataList: Array<{ label: string; value: string }>;
  error?: string;
  onChange: (e: { target: { value: string } }) => void;
  defaultOpen?: boolean;
};

const Dropdown = (props: DropdownPropType) => {
  const { label, dataList = [], error, onChange, defaultOpen = false } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState<boolean>(defaultOpen);

  const dropdowClassNames = classNames(
    'px-12 py-8 border-1 rounded-4',
    error ? 'border-solid-red' : 'border-grey-200',
    isShown ? 'rounded-bl-none rounded-br-none' : '',
    'w-full flex items-center justify-between space-x-8 cursor-pointer'
  );

  const onOptionClick = (value: string) => {
    onChange({ target: { value } });
    setIsShown(false);
  };

  useOutsideClick(dropdownRef, () => setIsShown(false));

  return (
    <div ref={dropdownRef}>
      <div className="relative">
        <button
          type="button"
          className={dropdowClassNames}
          onClick={() => setIsShown((prev) => !prev)}
        >
          <span className="text-md text-grey-500">{label}</span>
          <ArrowBottom />
        </button>
        {isShown && (
          <div className="w-full absolute top-full left-0">
            <ul className="w-full border-1 border-t-0 border-grey-200 rounded-bl-4 rounded-br-4 overflow-hidden last:border-b-0">
              {dataList.map((listItem, index: number) => {
                const { label, value } = listItem;

                return (
                  <li
                    key={index}
                    onClick={() => onOptionClick(value)}
                    className="px-12 py-8 cursor-pointer border-grey-200 border-b-1 text-solid-black bg-solid-white hover:bg-solid-violet-200 hover:text-solid-white"
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-solid-red text-right mt-4">{error}</p>
      )}
    </div>
  );
};

export default Dropdown;
