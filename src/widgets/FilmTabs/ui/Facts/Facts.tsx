import { FC, useEffect, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getFacts } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import { FetchFacts } from 'widgets/FilmTabs/model/service/FetchFacts';
import Button from 'shared/ui/Button';
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

  const [showAllFacts, setShowAllFacts] = useState(false);
  const FactsToDisplay = 6;

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

  const displayedFacts = showAllFacts ? items : items.slice(0, FactsToDisplay);

  return (
    <div className={classNames(cls.Facts, {}, [className])}>
      <ul>
        {displayedFacts.map((item, index) => (
          <li
            className={cls.Fact}
            key={index}
            dangerouslySetInnerHTML={replaceLink(item.text)}
          />
        ))}
      </ul>
      {items.length > FactsToDisplay && (
        <Button
          className={cls.showMore}
          onClick={() => setShowAllFacts(!showAllFacts)}
        >
          {showAllFacts ? 'Скрыть' : 'Показать больше'}
        </Button>
      )}
    </div>
  );
};

export default Facts;
