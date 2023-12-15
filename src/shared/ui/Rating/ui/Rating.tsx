import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Rating.module.scss';
import ratingScoreCategory from '../lib/ratingScoreCategory';
import { scoreCategory } from '../types/scoreCategoryTypes';

interface RatingProps {
  className?: string;
  rating: number;
}

const Rating: FC<RatingProps> = (props) => {
  const { className, rating } = props;

  const ratingCategory = ratingScoreCategory(rating) || scoreCategory.empty;

  return (
    <b className={classNames(cls.Rating, {}, [cls[ratingCategory], className])}>
      {rating || '??'}
    </b>
  );
};

export default Rating;
