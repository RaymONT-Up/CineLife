import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import { FilmTeamItem } from 'shared/api/kinopoisk/models';
import Button from 'shared/ui/Button';
import cls from './TeamList.module.scss';
import TeamPerson from './TeamPerson/TeamPerson';

interface TeamListProps {
  professionText: string;
  group: FilmTeamItem[];
}

// !FIX --- decompose and refactor.
// the Person page has the same PersonFilms component.
const TeamList: FC<TeamListProps> = ({ professionText, group }) => {
  const [itemsToShow, setItemsToShow] = useState(10);

  const showMore = () => {
    setItemsToShow((prev) => prev + 20);
  };

  const total = group.length;

  return (
    <div className={cls.box}>
      <Title
        Tag={TitleTags.h3}
        className={cls.title}
        theme={TitleTheme.subtitle}
      >
        {professionText}
        <span>
          {`(${total})`}
        </span>
      </Title>

      <ul className={cls.list}>
        {group.slice(0, itemsToShow).map((item, itemIndex) => (
          <TeamPerson
            staffId={item.staffId}
            key={`${item.staffId}${itemIndex}`}
            nameRu={item.nameRu}
            nameEn={item.nameEn}
            posterUrl={item.posterUrl}
            description={item.description}
            professionKey={item.professionKey}
            professionText={item.professionText}
          />
        ))}
      </ul>

      {itemsToShow < group.length && (
        <Button
          centered
          className={cls.showMore}
          onClick={showMore}
        >
          Показать еще (
          {`${itemsToShow} / ${total}`}
          )
        </Button>
      )}
    </div>
  );
};

export default TeamList;
