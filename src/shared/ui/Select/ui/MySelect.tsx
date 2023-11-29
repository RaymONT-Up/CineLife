import React, { FC } from 'react';
import Select, { OnChangeValue, Props as SelectProps } from 'react-select';
import classNames from 'shared/lib/classNames/classNames';
import './MySelect.scss';

export interface ISelectOption {
  value: string | number;
  label: string;
}

interface MySelectProps {
  onChange: (value: string | number) => void;
  options: ISelectOption[];
  name: string;
  defaultValue?: ISelectOption;

  className?: string;
  isSearchable?: boolean;
}

const MySelect: FC<MySelectProps> = (props) => {
  const {
    className = '',
    options,
    defaultValue = options[0],
    onChange,
    name,
    isSearchable = false,
    ...rest
  } = props;

  const handleChange = (newValue: ISelectOption) => {
    onChange(newValue.value);
  };

  return (
    <Select
      className={classNames('MySelectWrapper', {}, [className])}
      classNamePrefix="MySelect"
      defaultValue={defaultValue}
      name={name}
      options={options}
      isSearchable={isSearchable}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default MySelect;
