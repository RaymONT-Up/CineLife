import { catalogReducer, catalogActions } from 'pages/CatalogPage/model/slice/catalogPageSlice';

import { CatalogPageSchema } from './model/types/catalogPageSchema';

export { catalogReducer, catalogActions, CatalogPageSchema };

export { CatalogPageAsync as CatalogPage } from './ui/CatalogPage/CatalogPage.async';

// **FIX - Декомпозировать на entities and features
