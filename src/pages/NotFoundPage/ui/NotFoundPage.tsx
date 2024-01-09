import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import { TitleColor } from 'shared/ui/Title/ui/Title';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  return (
    <section className={classNames(cls.NotFoundPage, {}, [className])}>
      <Title
        className={cls.Title}
        color={TitleColor.primary}
        Tag={TitleTags.h1}
        centered
      >
        Страница не найдена
      </Title>
      <Title Tag={TitleTags.h3} theme={TitleTheme.subtitle} centered>
        Пожалуйста, проверьте правильность введенного URL или воспользуйтесь навигацией по сайту для поиска нужной информации.
      </Title>
    </section>
  );
};

export default NotFoundPage;
