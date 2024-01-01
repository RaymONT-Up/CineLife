import { FC } from 'react';
import Title, { TitleTheme } from 'shared/ui/Title';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import { catalogCountriesSelectOptions, catalogGenresSelectOptions } from 'shared/config/catalogFilter/catalogFilter';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';

import useShowMore from 'shared/lib/hooks/useShowMore/useShowMore';
import ShowMoreButtons from 'shared/ui/ShowMoreButtons';
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

  const genresList = catalogGenresSelectOptions.map((genre) => {
    return {
      label: genre.label,
      to: `${RoutePath.catalog}?${catalogURLParams.genre}=${genre.value}`,
    };
  });

  const {
    visibleItems: visibleCountries,
    hasMore: hasMoreCountries,
    showMore: showMoreCountries,
    reset: resetCountries,
    canHide: canHideCountries,
  } = useShowMore(countriesList, 30, 60);

  return (
    <div className={cls.Category}>
      <div className={cls.box}>
        <Title className={cls.title} theme={TitleTheme.subtitle}>
          Жанры:
        </Title>

        <TagsList list={genresList} />
      </div>

      <div className={cls.box}>
        <Title className={cls.title} theme={TitleTheme.subtitle}>
          Страны:
        </Title>

        <TagsList theme={TagsListTheme.outline} list={visibleCountries} />

        <ShowMoreButtons
          canHide={canHideCountries}
          hasMore={hasMoreCountries}
          showMore={showMoreCountries}
          reset={resetCountries}
        />

      </div>
    </div>
  );
};

export default Category;
