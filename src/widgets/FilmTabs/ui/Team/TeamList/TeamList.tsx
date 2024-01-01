import { FC } from 'react';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import { FilmTeamItem } from 'shared/api/kinopoisk/models';
import ListGrid from 'shared/ui/ListGrid';
import useShowMore from 'shared/lib/hooks/useShowMore/useShowMore';
import ShowMoreButtons from 'shared/ui/ShowMoreButtons';
import cls from './TeamList.module.scss';
import TeamPerson from './TeamPerson/TeamPerson';

interface TeamListProps {
  professionText: string;
  group: FilmTeamItem[];
}

const TeamList: FC<TeamListProps> = ({ professionText, group }) => {
  const {
    visibleItems, hasMore, showMore, reset, canHide,
  } = useShowMore(group, 15);

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

      <ListGrid>
        {visibleItems.map((item, itemIndex) => (
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
      </ListGrid>

      <ShowMoreButtons
        hasMore={hasMore}
        canHide={canHide}
        showMore={showMore}
        reset={reset}
      />
    </div>
  );
};

export default TeamList;
