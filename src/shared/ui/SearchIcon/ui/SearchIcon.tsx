import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import SearchSvg from 'shared/assets/icons/SearchIcon.svg';
import cls from './SearchIcon.module.scss';

interface SearchIconProps {
  className?: string;
}

const SearchIcon: FC<SearchIconProps> = (props) => {
  const { className } = props;
  return (
    <SearchSvg className={classNames(cls.SearchIcon, {}, [className])} />
  );
};

export default SearchIcon;
