import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import { Person } from 'shared/api/kinopoisk/models';
import InfoListItem from 'shared/ui/InfoListIem';
import formatDate from 'shared/lib/formatDate/formatDate';
import formatYears from 'shared/lib/formatYears/formatYears';
import cls from './PersonHeader.module.scss';

interface PersonHeaderProps extends Omit<Person, 'facts' | 'films'> {
  className?: string;
}

const PersonHeader: FC<PersonHeaderProps> = (props) => {
  const {
    className,

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
    hasAwards,
    profession,
  } = props;

  const name = (nameRu || nameEn) || 'Имя неизвестно';

  const birhdayFormated = formatDate(birthday as any);
  const ageFormated = formatYears(age);

  const sprouseName = sex === 'MALE' ? 'Супруга' : 'Супруг';

  return (
    <div className={classNames(cls.PersonHeader, {}, [className])}>
      <div className={cls.img_wrapper}>
        <img className={cls.img} src={posterUrl} alt={`${name} Фотография`} />
      </div>

      <div className={cls.info}>
        <Title className={cls.title} Tag={TitleTags.h1}>
          {name}
        </Title>
        {(nameRu && nameEn)
         && (
         <Title theme={TitleTheme.subtitle} className={cls.subtitle} Tag={TitleTags.h1}>
           {nameEn}
         </Title>
         ) }
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
          <InfoListItem name={sprouseName}>
            {spouses?.map((spouse) => (
              <div key={spouse.personId}>
                {spouse.name}
                {spouse.children}
              </div>
            ))}
          </InfoListItem>
        </ul>
      </div>
    </div>
  );
};

export default PersonHeader;
