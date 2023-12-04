import { FC } from 'react';
import cls from './FilmPlayer.module.scss';

interface FilmPlayerProps {
  id: number
}

const FilmPlayer: FC<FilmPlayerProps> = (props) => {
  const { id } = props;
  return (
    <iframe
      className={cls.player}
      title="Плеер"
      src={`https://voidboost.tv/embed/${id}`}
      allow="autoplay"
      allowFullScreen
    />
  );
};

export default FilmPlayer;
