import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      test
    </div>
  );
};

export default Hero;
