import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $getFilm } from 'shared/api/kinopoisk/catalog';
import cls from './FilmPage.module.scss';

interface FilmPageProps {
  className?: string;
}

const FilmPage: FC<FilmPageProps> = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Здесь можно использовать id для запроса данных для конкретного элемента
    console.log('Catalog Item ID:', id);
    $getFilm(+id).then((item) => console.log(item));
  }, [id]);

  return (
    <div className={cls.FilmPage}>
      <h1>
        Film
        {' '}
        {id}
      </h1>

      <iframe
        title="Фильм"
        src={`https://voidboost.tv/embed/${id}?poster=1&poster_id=4&df=1`}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default FilmPage;
