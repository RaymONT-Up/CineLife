import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Team.module.scss';

interface TeamProps {
  className?: string;
  id: number;
}

const Team: FC<TeamProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Team, {}, [className])} />
  );
};

export default Team;
