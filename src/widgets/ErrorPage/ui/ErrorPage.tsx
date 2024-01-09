import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { className } = props;

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>

      <h1 className={cls.title}>Произошла непредвиденная ошибка</h1>
      <Button className={cls.reloadBtn} onClick={reloadPage}>Пожалуйста, обновите страницу</Button>

    </div>
  );
};

export default ErrorPage;
