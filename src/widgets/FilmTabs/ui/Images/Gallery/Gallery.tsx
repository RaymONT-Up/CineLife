import {
  FC, Suspense, useEffect, useState,
} from 'react';
import Modal, { ModalTheme } from 'shared/ui/Modal';
import Loader from 'shared/ui/Loader';
import cls from './Gallery.module.scss';

interface GalleryProps{
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  images: string[]; // array urls
  initIndex: number;
}

const Gallery: FC<GalleryProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
    images = [],
    initIndex = 0,
  } = props;

  const initImageUrl = images[initIndex];

  const [currentImage, setCurrentImage] = useState(initImageUrl);

  // const currentImageIndex = images.indexOf((url) => currentImage === url);
  // const imagesLength = images.length;

  // const nextImage = () => {
  //   if (imagesLength > currentImageIndex) {
  //     setCurrentImage(images[currentImageIndex + 1]);
  //   }
  // };

  return (
    <Suspense fallback={<Loader />}>
      <Modal lazy theme={ModalTheme.clear} isOpen={isOpen} onClose={onClose}>
        <div className={cls.wrapper}>
          <img
            className={cls.img}
            src={currentImage}
            alt="Кадр из фильма"
          />
        </div>
      </Modal>
    </Suspense>
  );
};

export default Gallery;
