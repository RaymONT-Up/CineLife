import { FC, useEffect, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getFactsItems } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
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
  const factsItems = useSelector(getFactsItems);
  const dispatch = useDispatch();

  const [showAllFacts, setShowAllFacts] = useState(false);

  useEffect(() => {
    if (!factsItems.length) {
      dispatch(FetchFacts(id) as any);
    }
  }, [factsItems, dispatch, id]);

  const displayedFacts = showAllFacts ? factsItems : factsItems.slice(0, 5);

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
      {factsItems.length > 5 && (
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
