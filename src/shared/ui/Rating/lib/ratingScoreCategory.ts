import { scoreCategory } from '../types/scoreCategoryTypes';

const ratingScoreCategory = (rating:number): scoreCategory => {
  if (rating !== undefined && rating !== null) {
    if (rating >= 7.5) return scoreCategory.great;
    if (rating < 7.5 && rating >= 5) return scoreCategory.medium;
    if (rating < 5) return scoreCategory.bad;
  }

  return scoreCategory.empty;
};
export default ratingScoreCategory;
