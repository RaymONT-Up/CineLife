import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getFacts } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import { FetchFacts } from 'widgets/FilmTabs/model/service/FetchFacts';
import FactsList from 'shared/ui/Facts';
import replaceLink from './lib/replaceLinks';

import cls from './Facts.module.scss';

interface FactsProps {
  className?: string;
  id: number;
}

const Facts: FC<FactsProps> = (props) => {
  const { className, id } = props;
  const { dataReceived, items, error } = useSelector(getFacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataReceived) {
      dispatch(FetchFacts(id) as any);
    }
  }, [dataReceived, dispatch, id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (dataReceived && items.length === 0) {
    return <p>Факты не найдены</p>;
  }

  return (
    <div className={classNames(cls.Facts, {}, [className])}>
      <FactsList items={items.map((item) => replaceLink(item.text))} isHTML />
    </div>
  );
};

export default Facts;
