import React, { FC } from 'react';
import Select, { OnChangeValue, Props as SelectProps } from 'react-select';
import classNames from 'shared/lib/classNames/classNames';
import './MySelect.scss';

export interface ISelectOption {
  value: string;
  label: string;
}

interface MySelectProps extends Omit<SelectProps<ISelectOption>, 'onChange'> {
  className?: string;
  options: ISelectOption[];
  isSearchable: boolean;
  onChange: OnChangeValue<ISelectOption, boolean>;
  name: string;
}

const MySelect: FC<MySelectProps> = (props) => {
  const {
    className = '',
    options,
    onChange,
    name,
    ...rest
  } = props;

  const handleChange = (newValue: OnChangeValue<ISelectOption, boolean>) => {

  };

  return (
    <Select
      className={classNames('MySelectWrapper', {}, [className])}
      classNamePrefix="MySelect"
      defaultValue={options[0]}
      name={name}
      options={options}
      isSearchable={false}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default MySelect;
