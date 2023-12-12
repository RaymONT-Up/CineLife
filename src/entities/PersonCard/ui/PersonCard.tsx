import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PersonCard.module.scss';

interface PersonCardProps {
  className?: string;
}

const PersonCard: FC<PersonCardProps> = (props) => {
  const { className } = props;
  return (
    <li className={classNames(cls.PersonCard, {}, [className])} />
  );
};

export default PersonCard;
