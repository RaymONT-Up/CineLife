import { FC, FormEvent, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import bgImg from 'shared/assets/hero-bg.png';
import Title, { TitleTags } from 'shared/ui/Title';
import SearchForm from 'shared/ui/SearchForm';
import { useNavigate } from 'react-router-dom';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import cls from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { className = '' } = props;
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const searchValueHandler = (newSearchValue: string) => {
    setSearchValue(newSearchValue);
  };

  const searchFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/catalog?${catalogURLParams.keyword}=${searchValue}`);
  };

  return (
    <div
      className={classNames(cls.Hero, {}, [className])}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={cls.content}>
        <Title
          className={cls.title}
          Tag={TitleTags.h1}
          centered
        >
          Открой мир кино с
          <span className={cls.title_accent}> CineLife</span>
        </Title>
        <SearchForm
          className={cls.searchForm}
          value={searchValue}
          onChange={searchValueHandler}
          onSubmit={searchFormSubmitHandler}
        />
      </div>
    </div>
  );
};

export default Hero;
