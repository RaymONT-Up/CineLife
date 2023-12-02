import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './TagsList.module.scss';

export enum TagsListTheme {
  bgBlur = 'bgBlur',
  outline = 'outline',
}

interface TagsListProps {
  className?: string;
  list: string[];
  theme?: TagsListTheme;
}

const TagsList: FC<TagsListProps> = (props) => {
  const {
    className,
    list,
    theme = TagsListTheme.bgBlur,
  } = props;

  return (
    <ul className={classNames(cls.TagsList, {}, [className])}>
      {list.map((string, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={classNames(cls.item, {}, [cls[theme]])}>
          {string}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
