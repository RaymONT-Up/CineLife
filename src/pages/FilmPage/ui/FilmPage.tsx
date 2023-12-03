import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import PageLoader from 'widgets/PageLoader';
import cls from './FilmPage.module.scss';
import { FetchFilm } from '../model/service/FetchFilm';
import { FilmActions } from '../model/slice/FilmPageSlice';
import { getError, getFilm, getIsLoading } from '../model/selectors/FilmPageSelectors';

interface FilmPageProps {
  className?: string;
}

// !FIX decompose and refactor
const FilmPage: FC<FilmPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const filmData = useSelector(getFilm);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const {
    nameRu,
    description,
    posterUrl,
    ratingAgeLimits,
    coverUrl,
    logoUrl,
    year,
    slogan,
    genres,
    startYear,
    completed,
    endYear,
    type,
    filmLength,
  } = filmData;

  useEffect(() => {
    dispatch(FetchFilm(+id) as any);

    return () => {
      dispatch(FilmActions.resetFilm());
    };
  }, [id, dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }
  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  return (
    <div className={cls.FilmPage}>

      <div className={cls.top}>

        <div className={cls.imgWrapper}>
          <img className={cls.img} src={posterUrl} alt={`Обложка ${nameRu}`} />
        </div>

        <div className={cls.info}>
          <Title
            className={cls.title}
            theme={TitleTheme.hero}
            Tag={TitleTags.h1}
          >
            {nameRu}
          </Title>
          <ul className={cls.list}>
            <li className={cls.item}>

              <h6 className={cls.item__name}>
                Год:
              </h6>
              {year}
            </li>
            <li className={cls.item}>
              <h6 className={cls.item__name}>
                Время:
              </h6>
              {`${filmLength} Минут`}
            </li>
            <li className={cls.item}>
              <h6 className={cls.item__name}>
                Слоган:
              </h6>
              {slogan}
            </li>
            <li className={cls.item}>
              <h6 className={cls.item__name}>
                Возраст:
              </h6>
              {ratingAgeLimits}
            </li>
          </ul>
        </div>
      </div>

      <iframe
        className={cls.player}
        title={type}
        src={`https://voidboost.tv/embed/${id}`}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default FilmPage;
