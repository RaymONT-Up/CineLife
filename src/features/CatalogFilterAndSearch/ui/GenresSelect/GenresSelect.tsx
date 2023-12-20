import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect from 'shared/ui/Select/ui/MySelect';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import updateUrlParam from 'shared/lib/urlParams/updateUrlParam';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { getGenresState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { catalogGenresSelectOptions } from 'shared/config/catalogFilter/catalogFilter';
import { findValueOption } from 'shared/ui/Select';

interface GenresSelectProps {
  className?: string;
}

const GenresSelect: FC<GenresSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const genres = useSelector(getGenresState);
  const genre: number = genres && genres[0];
  const defaultValue = findValueOption(catalogGenresSelectOptions, genre, { value: '', label: 'Жанры' });

  const onChange = (newValue: number) => {
    // set param
    updateUrlParam(catalogURLParams.genre, `${newValue}`);

    dispatch(CatalogFilterAndSearchActions.setGenres([newValue]));
  };

  return (
    <MySelect
      options={catalogGenresSelectOptions}
      name="Жанры"
      defaultValue={defaultValue}
      className={classNames('', {}, [className])}
      onChange={onChange}
      isSearchable
    />
  );
};

export default GenresSelect;
