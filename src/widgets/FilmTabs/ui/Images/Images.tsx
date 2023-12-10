import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { getImages } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import { FetchImages } from 'widgets/FilmTabs/model/service/FetchImages';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'shared/ui/Carousel/ui/Carousel';
import cls from './Images.module.scss';

interface ImagesProps {
  className?: string;
  id: number;
}

const Images: FC<ImagesProps> = (props) => {
  const { className, id } = props;

  const dispatch = useDispatch();

  const { dataReceived, items, error } = useSelector(getImages);

  useEffect(() => {
    if (!dataReceived) {
      dispatch(FetchImages(id) as any);
    }
  }, [id, dispatch, dataReceived]);

  if (error) {
    return <p>{error}</p>;
  }

  if (dataReceived && items.length === 0) {
    return <p>Изображения не найдены</p>;
  }

  return (
    <div className={classNames(cls.Images, {}, [className])}>
      <Carousel
        slidesPerView={4}
        items={items?.map((item) => (
          <img src={item.previewUrl} alt="img" />
        ))}
      />
    </div>
  );
};

export default Images;
