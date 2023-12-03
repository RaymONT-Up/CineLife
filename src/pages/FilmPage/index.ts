import { FilmPageSchema } from './model/types/FilmPageSchema';
import { FilmReducer } from './model/slice/FilmPageSlice';

export {
  FilmPageSchema, FilmReducer,
};
export { FilmPageAsync as FilmPage } from './ui/FilmPage.async';
