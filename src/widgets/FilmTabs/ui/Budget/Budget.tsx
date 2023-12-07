import { FC, useEffect, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBudget } from 'widgets/FilmTabs/model/service/FetchBudget';
import { getBudget } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import Loader from 'shared/ui/Loader';
import cls from './Budget.module.scss';

interface BudgetProps {
  className?: string;
  id: number;
  isLoading: boolean;
}

const Budget: FC<BudgetProps> = (props) => {
  const { className, id, isLoading } = props;

  const dispatch = useDispatch();
  const budgetList = useSelector(getBudget);

  useEffect(() => {
    if (!budgetList) {
      dispatch(FetchBudget(id) as any);
    }
  }, [id, dispatch, budgetList]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={classNames(cls.Budget, {}, [className])}>
      {budgetList?.items?.map((item) => (
        <li className={cls.item} key={item.type}>
          <h6 className={cls.name}>{item.type}</h6>
          <p>
            {item.amount}
            {item.currencyCode}
          </p>
        </li>
      ))}
    </ul>

  );
};

export default Budget;
