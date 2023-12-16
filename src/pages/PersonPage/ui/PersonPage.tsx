import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLoader from 'widgets/PageLoader';
import Facts from 'shared/ui/Facts';
import { getPerson } from '../model/selectors/PersonPageSelectors';
import { FetchPerson } from '../model/service/FetchPerson';
import { PersonActions } from '../model/slice/PersonPageSlice';
import PersonHeader from './PersonHeader/PersonHeader';
import PersonFilms from './PersonFilms/PersonFilms';

interface PersonPageProps {
  className?: string;
}

const PersonPage: FC<PersonPageProps> = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const { isLoading, error, person } = useSelector(getPerson);

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
    hasAwards,
    profession,
    films,
    facts,
  } = person;

  useEffect(() => {
    dispatch(FetchPerson(+id) as any);

    return () => {
      dispatch(PersonActions.resetPerson());
    };
  }, [id, dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  return (
    <div>
      <PersonHeader
        nameRu={nameRu}
        nameEn={nameEn}
        posterUrl={posterUrl}
        growth={growth}
        age={age}
        birthday={birthday}
        birthplace={birthplace}
        death={death}
        deathplace={deathplace}
        sex={sex}
        spouses={spouses}
        hasAwards={hasAwards}
        profession={profession}
      />

      <Facts
        defaultShowCount={3}
        items={facts}
      />

      <PersonFilms
        films={films}
      />
    </div>
  );
};
export default PersonPage;
