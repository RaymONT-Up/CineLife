import { FC, useState } from 'react';
import Modal from 'shared/ui/Modal';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { className = '', isOpen, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);
  const formType = isLogin ? 'Авторизация' : 'Регистрация';

  const toggleFormType = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title theme={TitleTheme.subtitle} className={cls.Title} Tag={TitleTags.h6} centered>
        {formType}
      </Title>
      <LoginForm />
      <Button className={cls.toggleFormBtn} onClick={toggleFormType} theme={ButtonTheme.CLEAR}>{formType}</Button>
    </Modal>
  );
};

export default LoginModal;
