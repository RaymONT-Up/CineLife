import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Navigate } from 'react-router-dom';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const LoggedIn = true;

  if (LoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      ProfilePage
    </div>
  );
};

export default ProfilePage;
