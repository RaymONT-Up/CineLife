import {
  FC, useEffect, useState,
} from 'react';
import Modal from 'shared/ui/Modal';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import Button, { ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from 'features/Auth/model/selectors/getAuthState/getAuthState';
import Loader from 'shared/ui/Loader';
import { authActions } from '../../model/slice/authSlice';
import cls from './AuthModal.module.scss';
import AuthForm from '../AuthForm/AuthForm';

interface AuthModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DURATION = 500;

// !FIX - use global state. repeatable code for registration and authorization
const AuthModal: FC<AuthModalProps> = (props) => {
  const { className = '', isOpen, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);
  const [isСhanging, setIsСhanging] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getAuthState);

  // Обработчик события для переключения формы
  const toggleFormType = () => {
    // Старт анимации закрытия
    setIsСhanging(true);
    setIsOpens(false);

    dispatch(authActions.resetError());

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
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.Modal)}
      classNameContent={classNames(cls.content, { [cls.isChanging]: isСhanging, [cls.isOpens]: isOpens })}
    >

      {isLoading && <div className={cls.loader}><Loader /></div>}
      <Title
        theme={TitleTheme.subtitle}
        className={cls.Title}
        Tag={TitleTags.h6}
        centered
      >
        {isLogin ? 'Авторизация' : 'Регистрация'}
      </Title>
      {error && (
      <p className={cls.error}>
        {error}
      </p>
      )}

      <AuthForm isLogin={isLogin} />

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
