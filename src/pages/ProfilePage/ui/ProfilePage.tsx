import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const isAuth = useSelector(getIsAuth);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      ProfilePage
    </div>
  );
};

export default ProfilePage;
