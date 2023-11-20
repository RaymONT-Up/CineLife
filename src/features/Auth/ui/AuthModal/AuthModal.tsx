import { FC, useEffect, useState } from 'react';
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

const ANIMATION_DELAY = 500;

const AuthModal: FC<AuthModalProps> = (props) => {
  const { className = '', isOpen, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);
  const [isСhanging, setIsСhanging] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  useEffect(() => {
    let Timer: ReturnType<typeof setTimeout>;

    if (isСhanging) {
      Timer = setTimeout(() => {
        setIsСhanging(false);
        setIsOpens(true);
      }, ANIMATION_DELAY);
    }

    return () => {
      clearTimeout(Timer);
    };
  }, [isСhanging]);

  const toggleFormType = () => {
    setTimeout(() => {
      setIsLogin((prev) => !prev);
    }, ANIMATION_DELAY);
    setIsOpens(false);
    setIsСhanging(true);
  };

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
