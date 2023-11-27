import { FC, FormEvent } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input';
import SearchIcon from 'shared/ui/SearchIcon';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './SearchForm.module.scss';

interface SearchFormProps {
  className?: string;
  classNameInput?: string;
  classNameSubmitBtn?: string;

  placeholder?: string;
  value: string;
  onChange: (str: string) => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchForm: FC<SearchFormProps> = (props) => {
  const {
    className = '',
    classNameInput = '',
    classNameSubmitBtn = '',

    placeholder = '',

    value,
    onChange,
    onSubmit,
  } = props;

  return (
    <form
      onSubmit={onSubmit}
      className={classNames(cls.SearchForm, {}, [className])}
    >
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={classNames(cls.input, {}, [classNameInput])}
      />
      <Button
        className={classNames(cls.submitBtn, {}, [classNameSubmitBtn])}
        type="submit"
        theme={ButtonTheme.CLEAR}
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchForm;
