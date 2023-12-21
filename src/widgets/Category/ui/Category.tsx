import { FC } from 'react';
import Title, { TitleTheme } from 'shared/ui/Title';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import { catalogCountriesSelectOptions, catalogGenresSelectOptions } from 'shared/config/catalogFilter/catalogFilter';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import cls from './Category.module.scss';

interface CategoryProps {
  className?: string;

}

const Category: FC<CategoryProps> = (props) => {
  const countriesList = catalogCountriesSelectOptions.map((country) => {
    return {
      label: country.label,
      to: `${RoutePath.catalog}?${catalogURLParams.country}=${country.value}`,
    };
  });

  const genriesList = catalogGenresSelectOptions.map((country) => {
    return {
      label: country.label,
      to: `${RoutePath.catalog}?${catalogURLParams.genre}=${country.value}`,
    };
  });

  return (
    <div className={cls.Category}>
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        По  жанрам:
      </Title>

      <TagsList className={cls.list} list={genriesList} />

      <Title className={cls.title} theme={TitleTheme.subtitle}>
        По  странам:
      </Title>

      <TagsList theme={TagsListTheme.outline} className={cls.list} list={countriesList} />
    </div>
  );
};

export default Category;
