import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FilmTeamItem } from 'shared/api/kinopoisk/models';
import AppLink from 'shared/ui/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import CardBgImage from 'shared/ui/CardBgImage';
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
      <CardBgImage
        src={posterUrl}
        alt={`Фотография ${name}`}
        to={`/${AppRoutes.PERSON}/${staffId}`}
      >

        <div className={cls.info}>

          <h5 className={cls.name}>
            {name}
          </h5>

          {description && (
            <h6 className={cls.description}>
              {description}
            </h6>
          )}
        </div>

      </CardBgImage>

    </li>
  );
};

export default TeamPerson;
