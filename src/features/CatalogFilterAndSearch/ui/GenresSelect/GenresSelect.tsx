import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect from 'shared/ui/Select/ui/MySelect';
import { useDispatch } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';

interface GenresSelectProps {
  className?: string;
}

const catalogGenresSelectOptions = [
  { value: 1, label: 'Триллер' },
  { value: 2, label: 'Драма' },
  { value: 3, label: 'Криминал' },
  { value: 4, label: 'Мелодрама' },
  { value: 5, label: 'Детектив' },
  { value: 6, label: 'Фантастика' },
  { value: 7, label: 'Приключения' },
  { value: 8, label: 'Биография' },
  { value: 9, label: 'Фильм-нуар' },
  { value: 10, label: 'Вестерн' },
  { value: 11, label: 'Боевик' },
  { value: 12, label: 'Фэнтези' },
  { value: 13, label: 'Комедия' },
  { value: 14, label: 'Военный' },
  { value: 15, label: 'История' },
  { value: 16, label: 'Музыка' },
  { value: 17, label: 'Ужасы' },
  { value: 18, label: 'Мультфильм' },
  { value: 19, label: 'Семейный' },
  { value: 20, label: 'Мюзикл' },
  { value: 21, label: 'Спорт' },
  { value: 22, label: 'Документальный' },
  { value: 23, label: 'Короткометражка' },
  { value: 24, label: 'Аниме' },
  { value: 25, label: '' },
  { value: 26, label: 'Новости' },
  { value: 27, label: 'Концерт' },
  { value: 28, label: 'Для взрослых' },
  { value: 29, label: 'Церемония' },
  { value: 30, label: 'Реальное ТВ' },
  { value: 31, label: 'Игра' },
  { value: 32, label: 'Ток-шоу' },
  { value: 33, label: 'Детский' },
];

const GenresSelect: FC<GenresSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const onChange = (newValue: number) => {
    dispatch(CatalogFilterAndSearchActions.setGenres([newValue]));
  };

  return (
    <MySelect
      options={catalogGenresSelectOptions}
      name="Жанры"
      defaultValue={{ value: 'Выберите жанр', label: 'Жанры' }}
      className={classNames('', {}, [className])}
      onChange={onChange}
      isSearchable
    />
  );
};

export default GenresSelect;
