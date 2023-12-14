import { scoreCategory } from '../types/scoreCategoryTypes';

const EMPTY_THRESHOLD = 7.5;
const MEDIUM_THRESHOLD = 5;

const ratingScoreCategory = (rating: number): scoreCategory => {
  if (rating === null || rating === undefined) return scoreCategory.empty;
  if (rating >= EMPTY_THRESHOLD) return scoreCategory.great;
  if (rating < EMPTY_THRESHOLD && rating >= MEDIUM_THRESHOLD) return scoreCategory.medium;
  if (rating < MEDIUM_THRESHOLD) return scoreCategory.bad;

  return scoreCategory.empty;
};

export default ratingScoreCategory;
