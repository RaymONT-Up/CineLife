import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import cls from './TagsList.module.scss';

export enum TagsListTheme {
  bgBlur = 'bgBlur',
  outline = 'outline',
}

interface TagLink {
  label: string,
  to?: string,
}

interface TagsListProps {
  className?: string;
  list: TagLink[];
  theme?: TagsListTheme;
  disableHover?: boolean;
}

const TagsList: FC<TagsListProps> = (props) => {
  const {
    className,
    list,
    theme = TagsListTheme.bgBlur,
    disableHover,
  } = props;

  if (list?.length === 0) {
    return undefined;
  }

  return (
    <ul
      className={classNames(cls.TagsList, {
        [cls.disableHover]: disableHover,
      }, [className])}
    >
      {list?.map((tag, index) => {
        const { to, label } = tag;

        // eslint-disable-next-line react/no-array-index-key
        return (
          <li
            className={classNames(cls.item, {}, [cls[theme]])}
            key={index}
          >
            {to
              ? (
                <AppLink
                  to={to}
                >
                  {label}
                </AppLink>
              )
              : (
                <span>
                  {label}
                </span>
              )}
          </li>
        );
      })}
    </ul>
  );
};

export default TagsList;
