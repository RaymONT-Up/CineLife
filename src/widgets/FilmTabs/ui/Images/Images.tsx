import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { getImagesItems } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
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

  const imagesItems = useSelector(getImagesItems);

  useEffect(() => {
    if (!imagesItems.length) {
      dispatch(FetchImages(id) as any);
    }
  }, [id, dispatch, imagesItems]);
  return (
    <div className={classNames(cls.Images, {}, [className])}>
      <Carousel
        slidesPerView={4}
        items={imagesItems?.map((item) => (
          <img src={item.previewUrl} alt="img" />
        ))}
      />
    </div>
  );
};

export default Images;
