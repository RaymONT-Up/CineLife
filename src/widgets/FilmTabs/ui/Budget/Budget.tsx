import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBudget } from 'widgets/FilmTabs/model/service/FetchBudget';
import { getBudget } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import cls from './Budget.module.scss';

interface BudgetProps {
  className?: string;
  id: number;
}

const Budget: FC<BudgetProps> = (props) => {
  const { className, id } = props;

  const dispatch = useDispatch();

  const { error, items, dataReceived } = useSelector(getBudget);

  useEffect(() => {
    if (!dataReceived) {
      dispatch(FetchBudget(id) as any);
    }
  }, [id, dispatch, dataReceived]);

  if (error) {
    return <p>{error}</p>;
  }

  if (dataReceived && items.length === 0) {
    return <p>Данные о бюджете не найдены</p>;
  }

  return (
    <ul className={classNames(cls.Budget, {}, [className])}>
      {items?.map((item) => (
        <li className={cls.item} key={item.type}>
          <h6 className={cls.name}>{`${item.type}:`}</h6>
          <p className={cls.amount}>
            {`${item.amount.toLocaleString()} ${item.symbol}`}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Budget;
