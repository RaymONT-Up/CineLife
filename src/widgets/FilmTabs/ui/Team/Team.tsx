// Team.tsx
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTeam } from 'widgets/FilmTabs/model/service/FetchTeam';
import { getTeam } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import Title, { TitleTheme } from 'shared/ui/Title';
import { FilmTeamItem } from 'shared/api/kinopoisk/models';
import cls from './Team.module.scss';
import TeamList from './TeamList/TeamList';

interface TeamProps {
  className?: string;
  id: number;
}

const Team: FC<TeamProps> = ({ className, id }) => {
  const dispatch = useDispatch();
  const { items, dataReceived, error } = useSelector(getTeam);

  useEffect(() => {
    if (!dataReceived) {
      dispatch(FetchTeam(id) as any);
    }
  }, [id, dispatch, dataReceived]);

  if (items.length === 0 && dataReceived) {
    return <p>Данные о команде не найдены</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const groupedItems = items.reduce((acc, item) => {
    const { professionText } = item;

    if (!acc[professionText]) {
      acc[professionText] = [];
    }

    acc[professionText].push(item);

    return acc;
  }, {} as Record<string, FilmTeamItem[]>);

  return (
    <div className={cls.team}>
      <Title theme={TitleTheme.subtitle} className={cls.total}>
        {`Всего: ${items.length}`}
      </Title>

      {Object.entries(groupedItems).map(([professionText, group], index) => (
        <TeamList
          key={index}
          professionText={professionText}
          group={group}
        />
      ))}
    </div>
  );
};

export default Team;
