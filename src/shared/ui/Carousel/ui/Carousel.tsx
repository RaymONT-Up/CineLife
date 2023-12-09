import { FC, ReactNode } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Carousel.module.scss';

interface CarouselProps extends SwiperProps {
  className?: string;
  items: ReactNode[];
  breakpoints?: Record<number, { slidesPerView: number }>;
  spaceBetween?: number;
  onSlideChange?: () => void;
  slidesPerView?: number;
}

const Carousel: FC<CarouselProps> = ({
  className,
  items,
  breakpoints,
  spaceBetween,
  slidesPerView,
  ...props
}) => (
  <div className={classNames(cls.Carousel, {}, [className])}>
    <Swiper
      spaceBetween={spaceBetween || 50}
      slidesPerView={slidesPerView || 1}
      breakpoints={breakpoints}
      {...props}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
