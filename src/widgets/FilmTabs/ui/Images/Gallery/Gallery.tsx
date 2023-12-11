import React, {
  FC, useState, useEffect, useCallback,
} from 'react';
import Modal, { ModalTheme } from 'shared/ui/Modal';
import { ArrowLeft, ArrowRight } from 'shared/ui/Carousel';
import cls from './Gallery.module.scss';

interface GalleryProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  images: string[]; // array urls
  initIndex: number;
}

const GalleryContent: FC<{ currentImage: string }> = ({ currentImage }) => (
  <div className={cls.img_wrapper}>
    <img className={cls.img} src={currentImage} alt="Кадр из фильма" />
  </div>
);

const Gallery: FC<GalleryProps> = (props) => {
  const {
    className, isOpen, onClose, images = [], initIndex = 0,
  } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(initIndex);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const initImageUrl = images[currentImageIndex];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isOpen) {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    }
  }, [isOpen, prevImage, nextImage]);

  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => handleKeyDown(e);
    document.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [handleKeyDown]);

  return (
    <Modal classNameContent={cls.content} lazy theme={ModalTheme.clear} isOpen={isOpen} onClose={onClose}>
      <ArrowLeft className={cls.prev} onClick={prevImage} />
      <GalleryContent currentImage={initImageUrl} />
      <ArrowRight className={cls.next} onClick={nextImage} />
    </Modal>
  );
};

export default Gallery;
