import {
  FC, useCallback, useEffect, useState,
} from 'react';
import Modal from 'shared/ui/Modal';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import Button, { ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames/classNames';
import cls from './AuthModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

interface AuthModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DURATION = 1000;

const AuthModal: FC<AuthModalProps> = (props) => {
  const { className = '', isOpen, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);
  const [isСhanging, setIsСhanging] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  // Обработчик события для переключения формы
  const toggleFormType = () => {
    // Старт анимации закрытия
    setIsСhanging(true);
    setIsOpens(false);

    setTimeout(() => {
      setIsLogin((prev) => !prev);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    let timerChanging: ReturnType<typeof setTimeout>;
    if (isСhanging) {
      // Таймер для анимации закрытия
      timerChanging = setTimeout(() => {
      // Завершение анимации закрытия
        setIsСhanging(false);

        // Старт анимации открытия
        setIsOpens(true);

        // Таймер для завершения анимации открытия
        const timerOpening = setTimeout(() => {
        // Завершение анимации открытия
          setIsOpens(false);
        }, ANIMATION_DURATION);

        // Очистка таймера для завершения анимации открытия при размонтировании
        return () => {
          clearTimeout(timerOpening);
        };
      }, ANIMATION_DURATION);
      // Очистка таймера для анимации закрытия при размонтировании
    }
    return () => {
      clearTimeout(timerChanging);
    };
  }, [isСhanging]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.Modal)}
      classNameContent={classNames(cls.content, { [cls.isChanging]: isСhanging, [cls.isOpens]: isOpens })}
    >
      <Title
        theme={TitleTheme.subtitle}
        className={cls.Title}
        Tag={TitleTags.h6}
        centered
      >
        {isLogin ? 'Авторизация' : 'Регистрация'}
      </Title>

      {isLogin
        ? <LoginForm className={classNames(cls.Form)} />
        : <RegisterForm className={classNames(cls.Form)} />}

      <Button
        className={cls.toggleFormBtn}
        onClick={toggleFormType}
        theme={ButtonTheme.CLEAR}
      >

        {isLogin ? 'Регистрация ->' : 'Авторизация ->'}
      </Button>
    </Modal>
  );
};

export default AuthModal;
