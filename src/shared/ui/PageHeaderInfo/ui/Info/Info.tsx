import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Title, { TitleTheme } from 'shared/ui/Title';
import cls from './Info.module.scss';

interface InfoProps {
  className?: string;
  name: string;
  subName: string;
  children: ReactNode;
}

const Info: FC<InfoProps> = (props) => {
  const {
    className, name, subName, children,
  } = props;

  const mainName = name || subName || 'Имя отсутствует';

  return (
    <div className={classNames(cls.Info, {}, [className])}>
      <Title className={cls.title}>{mainName}</Title>

      {name && subName && (
        <Title theme={TitleTheme.subtitle} className={cls.subtitle}>
          {subName}
        </Title>
      )}

      {children && <div className={cls.info_content}>{children}</div>}
    </div>
  );
};

export default Info;
