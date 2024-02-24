import { ChangeEvent, Ref, forwardRef } from 'react';
import classNames from 'classnames';

type TextInputProps = {
  type: 'url' | 'text' | 'tel' | 'password' | 'number' | 'search' | 'email';
  label?: string;
  error?: string;
  dataList?: Array<string>;
  defaultValue?: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
};

const TextInput = forwardRef(
  (props: TextInputProps, ref: Ref<HTMLInputElement>) => {
    const {
      type,
      label,
      error,
      dataList = [],
      defaultValue,
      value,
      isRequired = false,
      onChange = () => {},
      name,
      placeholder = '',
    } = props;

    const textInputId = `Input-${Math.random()}`;
    const dataListId = `DataList-${Math.random()}`;
    const textInputClassNames = classNames(
      'px-12 py-8 border-1 rounded-4 text-md outline-1 outline-solid-violet-200 active:border-solid-violet-200',
      error ? 'border-solid-red' : 'border-grey-200'
    );

    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={textInputId}
            className="text-solid-black text-sm mb-4"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={textInputId}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          required={isRequired}
          list={dataListId}
          className={textInputClassNames}
        />
        {dataList.length > 0 && (
          <datalist id={dataListId}>
            {dataList.map((value: string, index: number) => (
              <option key={index} value={value}></option>
            ))}
          </datalist>
        )}
        {error && (
          <p className="text-sm text-solid-red text-right mt-4">{error}</p>
        )}
      </div>
    );
  }
);

export default TextInput;
