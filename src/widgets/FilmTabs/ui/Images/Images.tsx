import { FC, useEffect, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { getImages } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import { FetchImages } from 'widgets/FilmTabs/model/service/FetchImages';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'shared/ui/Carousel/ui/Carousel';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Images.module.scss';
import Gallery from './Gallery/Gallery';

interface ImagesProps {
  className?: string;
  id: number;
}

const screenWidth = window.innerWidth;

const Images: FC<ImagesProps> = (props) => {
  const { className, id } = props;

  const dispatch = useDispatch();

  const { dataReceived, items, error } = useSelector(getImages);

  const [initImageIndex, setInitImageIndex] = useState<number | null>(null);
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  useEffect(() => {
    if (!dataReceived) {
      dispatch(FetchImages(id) as any);
    }
  }, [id, dispatch, dataReceived]);

  const openGallery = (index: number) => {
    setInitImageIndex(index);
    setGalleryIsOpen(true);
  };

  const closeGallery = () => {
    setInitImageIndex(null);
    setGalleryIsOpen(false);
  };

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
        autoHeight
        spaceBetween={screenWidth / 100}
        items={items?.map((item, index) => (
          <Button
            className={cls.wrapper}
            theme={ButtonTheme.CLEAR}
            onClick={() => openGallery(index)}
          >
            <img
              className={cls.img}
              src={item.previewUrl}
              alt={`Кадр из фильма ${index + 1}`}
            />
          </Button>
        ))}
      />

      {galleryIsOpen
      && (
      <Gallery
        isOpen={galleryIsOpen}
        onClose={closeGallery}
        images={items.map((item) => item.imageUrl)}
        initIndex={initImageIndex}
      />
      )}

    </div>
  );
};

export default Images;
