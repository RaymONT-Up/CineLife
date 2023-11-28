import React, { FC } from 'react';
import Select, { OnChangeValue, Props as SelectProps } from 'react-select';
import classNames from 'shared/lib/classNames/classNames';
import './MySelect.scss';

export interface ISelectOption {
  value: string;
  label: string;
}

interface MySelectProps {
  onChange: (value: string) => void;
  options: ISelectOption[];
  name: string;

  className?: string;
  isSearchable?: boolean;
}

const MySelect: FC<MySelectProps> = (props) => {
  const {
    className = '',
    options,
    onChange,
    name,
    isSearchable = false,
    ...rest
  } = props;

  const handleChange = (newValue: ISelectOption) => {
    onChange(newValue.value);
    console.log(newValue, 'in');
  };

  return (
    <Select
      className={classNames('MySelectWrapper', {}, [className])}
      classNamePrefix="MySelect"
      defaultValue={options[0]}
      name={name}
      options={options}
      isSearchable={isSearchable}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default MySelect;
