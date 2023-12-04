import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageLoader from 'widgets/PageLoader';
import cls from './FilmPage.module.scss';
import { FetchFilm } from '../model/service/FetchFilm';
import { FilmActions } from '../model/slice/FilmPageSlice';
import { getError, getIsLoading } from '../model/selectors/FilmPageSelectors';
import FilmHeader from './FilmHeader/FilmHeader';
import FilmPlayer from './FilmPlayer/FilmPlayer';
import FilmTabs from './FilmTabs/FilmTabs';

interface FilmPageProps {
  className?: string;
}

// !FIX decompose and refactor
const FilmPage: FC<FilmPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
      <FilmTabs />
      <FilmPlayer id={+id} />
    </div>
  );
};

export default FilmPage;
