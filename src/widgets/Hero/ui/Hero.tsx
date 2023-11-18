import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import bgImg from 'shared/assets/hero-bg.png';
import Title, { TitleTags } from 'shared/ui/Title';
import cls from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { className = '' } = props;
  return (
    <div
      className={classNames(cls.Hero, {}, [className])}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={cls.content}>
        <Title className={cls.title} Tag={TitleTags.h1}>
          Открой мир кино с
          <span className={cls.title_accent}> CineLife</span>
        </Title>
      </div>
    </div>
  );
};

export default Hero;
