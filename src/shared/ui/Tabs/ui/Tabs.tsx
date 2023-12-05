import { FC, ReactNode, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import cls from './Tabs.module.scss';

 interface Tab {
  name: string | ReactNode;
  content: string | ReactNode;
  id: number | string;
}

interface TabsProps {
  className?: string;
  buttonClass?: string;
  activeClass?: string;
  contentClass?: string;

  defaultTab?: Tab; // tab from tabsList

  TabsList: Tab[]
}

const Tabs: FC<TabsProps> = (props) => {
  const {
    className = '',
    buttonClass = '',
    contentClass = '',
    activeClass = '',

    TabsList,

    defaultTab = TabsList[0],

  } = props;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const btnOnClick = (newTab: Tab) => {
    setActiveTab((prev) => {
      if (prev.id !== newTab.id) return newTab;
      return prev;
    });
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      <div className={cls.buttons}>
        {TabsList.map((tab) => {
          const { id, name } = tab;
          const isActive = activeTab.id === id;

          return (
            <Button
              className={classNames(
                cls.button,
                { [cls.active]: isActive, [activeClass]: isActive },
                [buttonClass],
              )}
              key={tab.id}
              onClick={() => btnOnClick(tab)}
            >
              {name}
            </Button>
          );
        })}
      </div>
      <div className={`${cls.content} ${contentClass}`}>
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
