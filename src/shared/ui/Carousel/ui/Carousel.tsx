import { FC, ReactNode } from 'react';
import {
  Swiper, SwiperProps, SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import classNames from 'shared/lib/classNames/classNames';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import cls from './Carousel.module.scss';
import { ArrowLeft, ArrowRight } from './Arrows/Arrows';

interface CarouselProps extends SwiperProps {
  className?: string;
  items: ReactNode[];
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  spaceBetween?: number;
  onSlideChange?: () => void;
  slidesPerView?: number;
  enableNavigation?: boolean;
}

const Carousel: FC<CarouselProps> = ({
  className,
  items,
  breakpoints,
  spaceBetween,
  slidesPerView,
  enableNavigation = false,
  ...props
}) => {
  const navigationOptions = enableNavigation ? {
    nextEl: `.${cls.next}`,
    prevEl: `.${cls.prev}`,
  } : false;

  return (
    <div className={classNames(cls.Carousel, {}, [className])}>
      <Swiper
        spaceBetween={spaceBetween || 0}
        slidesPerView={slidesPerView || 'auto'}
        navigation={navigationOptions}
        modules={[Navigation]}
        breakpoints={breakpoints || {}}
        {...props}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {enableNavigation && (
        <>
          <ArrowLeft className={cls.prev} />
          <ArrowRight className={cls.next} />
        </>
      )}
    </div>
  );
};

export default Carousel;
