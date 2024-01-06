import { ProfilePageAsync } from './ui/ProfilePage.async';

import { profileReducer } from './model/slice/ProfilePageSlice';
import { ProfilePageSchema } from './model/types/ProfilePageTypes';

export {
  ProfilePageSchema,
  profileReducer,
};
export { ProfilePageAsync as ProfilePage };
