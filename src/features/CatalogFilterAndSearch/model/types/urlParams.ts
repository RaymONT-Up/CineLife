export enum catalogURLParams {
  order = 'order',
  type = 'type',
  genre = 'genre',
  country = 'country',
  keyword = 'keyword'
}

export interface IcatalogURLParams {
  order?: catalogURLParams.order;
  type?: catalogURLParams.type;
  genre?: catalogURLParams.genre;
  country?: catalogURLParams.country;
  keyword?: catalogURLParams.keyword;
}
