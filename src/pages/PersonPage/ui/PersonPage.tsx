import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLoader from 'widgets/PageLoader';
import cls from './PersonPage.module.scss';
import { getPerson } from '../model/selectors/PersonPageSelectors';
import { FetchPerson } from '../model/service/FetchPerson';
import { PersonActions } from '../model/slice/PersonPageSlice';
import PersonHeader from './PersonHeader/PersonHeader';

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
    <div className={cls.PersonPage}>
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
    </div>
  );
};
export default PersonPage;
