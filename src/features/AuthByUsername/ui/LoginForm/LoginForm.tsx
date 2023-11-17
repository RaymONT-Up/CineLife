import { FC, useState } from 'react';
import Input from 'shared/ui/Input';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className = '' } = props;

  const [username, setUsername] = useState('');

  const onUsernameChange = (val: string) => {
    setUsername(val);
  };

  return (
    <form className={cls.LoginForm}>
      <Input value={username} onChange={onUsernameChange} className={classNames(cls.Input)} />
      <Input className={classNames(cls.Input)} />
      <Button className={classNames(cls.Button)}>Test</Button>
    </form>
  );
};
export default LoginForm;
