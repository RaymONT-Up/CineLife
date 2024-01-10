import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageLoader from 'widgets/PageLoader';
import FilmTabs from 'widgets/FilmTabs';
import cls from './FilmPage.module.scss';
import { FetchFilm } from '../model/service/FetchFilm';
import { FilmActions } from '../model/slice/FilmPageSlice';
import { getDescription, getError, getIsLoading } from '../model/selectors/FilmPageSelectors';
import FilmHeader from './FilmHeader/FilmHeader';
import FilmPlayer from './FilmPlayer/FilmPlayer';

export interface FilmPageProps {
  className?: string;
}

// !FIX decompose and refactor
const FilmPage: FC<FilmPageProps> = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const description = useSelector(getDescription);

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
      <FilmHeader />
      <FilmTabs id={+id} description={description} />
      <FilmPlayer id={+id} />
    </div>
  );
};

export default FilmPage;
