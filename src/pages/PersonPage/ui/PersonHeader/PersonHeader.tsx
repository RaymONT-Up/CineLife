import { FC } from 'react';
import { Person } from 'shared/api/kinopoisk/models';
import InfoListItem from 'shared/ui/InfoListIem';
import formatDate from 'shared/lib/formatDate/formatDate';
import formatYears from 'shared/lib/formatYears/formatYears';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import getChildrenLabel from 'pages/PersonPage/lib/getChildrenLabel/getChildrenLabel';
import PageHeaderInfo from 'shared/ui/PageHeaderInfo/ui/PageHeaderInfo';
import cls from './PersonHeader.module.scss';

interface PersonHeaderProps extends Omit<Person, 'facts' | 'films'> {
  className?: string;
}

const PersonHeader: FC<PersonHeaderProps> = (props) => {
  const {
    nameRu,
    nameEn,
    posterUrl,
    growth,
    age,
    birthday,
    birthplace,
    death,
    deathplace,

    sex,
    spouses,
    profession,
  } = props;

  const birhdayFormated = formatDate(birthday as any);
  const ageFormated = formatYears(age);

  const sprouseName = sex === 'MALE' ? 'Супруга' : 'Супруг';

  return (
    <PageHeaderInfo
      className={cls.PersonHeader}
      coverUrl={posterUrl}
      coverClassName={cls.coverBg}
      src={posterUrl}
      alt={`Фотография ${nameRu || nameEn}`}
      name={nameRu}
      subName={nameEn}
    >
      <ul>
        <InfoListItem isVisible={growth} name="Рост">
          {`${growth} см.`}
        </InfoListItem>
        <InfoListItem isVisible={birthday && age} name="Дата рождения">
          {`${birhdayFormated} (${ageFormated})`}
        </InfoListItem>
        <InfoListItem name="Место рождения">
          {birthplace}
        </InfoListItem>
        <InfoListItem name="Смерть">
          {formatDate(death as any)}
        </InfoListItem>
        <InfoListItem name="Место Смерти">
          {deathplace}
        </InfoListItem>
        <InfoListItem name="Профессия">
          {profession}
        </InfoListItem>
        <InfoListItem
          isVisible={spouses?.length !== 0}
          isVerticalCentered={false}
          className={cls.spouses}
          name={sprouseName}
        >
          {spouses?.map((spouse) => (
            <AppLink
              theme={AppLinkTheme.ACCENT}
              className={cls.spouse}
              to={`/${AppRoutes.PERSON}/${spouse.personId}`}
              key={spouse.personId}
            >
              <span>
                {spouse.name}
              </span>

              {spouse.children >= 1 && <span>{ getChildrenLabel(spouse.children)}</span>}

              <span>
                {spouse.divorcedReason}
              </span>
            </AppLink>
          ))}
        </InfoListItem>
      </ul>
    </PageHeaderInfo>
  );
};

export default PersonHeader;
