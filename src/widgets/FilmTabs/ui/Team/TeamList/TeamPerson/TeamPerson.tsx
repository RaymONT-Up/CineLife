import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FilmTeamItem } from 'shared/api/kinopoisk/models';
import AppLink from 'shared/ui/AppLink';
import cls from './TeamPerson.module.scss';

interface TeamPersonProps extends FilmTeamItem{
  className?: string;
}

// const getProfessionText = (key: string): string | undefined => {
//   return TeamProfession[key as keyof typeof TeamProfession] || '';
// };

const TeamPerson: FC<TeamPersonProps> = (props) => {
  const {
    className,
    staffId,
    nameEn,
    nameRu,
    description,
    posterUrl,
  } = props;

  const name = (nameRu || nameEn) || 'Имя неизвестно';

  return (
    <li>
      <AppLink
        className={classNames(cls.TeamPerson, {}, [className])}
        to={`test/${staffId}`}
      >
        <div className={cls.wrapper}>
          <img
            className={cls.img}
            src={posterUrl}
            alt={`Фотография ${name}`}
          />
          <div className={cls.info}>

            <h5 className={cls.name}>
              {name}
            </h5>

            {description
            && (
            <h6 className={cls.description}>
              {description}
            </h6>
            )}
          </div>
        </div>

      </AppLink>
    </li>
  );
};

export default TeamPerson;
