import {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Tabs.module.scss';

 interface Tab {
  name: string | ReactNode;
  content: string | ReactNode;
  id: number | string;
}

interface TabsProps {
  className?: string;
  buttonClass?: string;
  buttonsClass?: string;
  activeClass?: string;
  contentClass?: string;
  isLoading?: boolean;

  defaultTab?: Tab; // tab from tabsList

  TabsList: Tab[]
}

const Tabs: FC<TabsProps> = (props) => {
  const {
    className = '',
    buttonsClass = '',
    buttonClass = '',
    contentClass = '',
    activeClass = '',

    isLoading = false,

    TabsList,

    defaultTab = TabsList[0],

  } = props;

  const [activeTab, setActiveTab] = useState(defaultTab);

  // underline logic
  const buttonsRef = useRef(null);

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  // useEffect(() => {
  //   document.addEventListener('resize', activeTabSetLine);

  //   return () => {
  //     document.removeEventListener('resize', activeTabSetLine);
  //   };
  // }, [activeTabSetLine]);

  useEffect(() => {
    const activeTabEl = buttonsRef?.current?.querySelector(`.${cls.active}`);

    const width = activeTabEl?.offsetWidth;
    const left = activeTabEl?.offsetLeft;

    setUnderlineWidth(width);
    setUnderlineLeft(left);
  }, [activeTab]);

  const btnOnClick = (newTab: Tab) => {
    setActiveTab((prev) => {
      if (prev.id !== newTab.id) return newTab;
      return prev;
    });
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      <div
        ref={buttonsRef}
        className={classNames(cls.buttons, { [cls.isLoading]: isLoading }, [buttonsClass])}
      >
        {TabsList.map((tab) => {
          const { id, name } = tab;
          const isActive = activeTab.id === id;

          return (
            <Button
              theme={ButtonTheme.CLEAR}
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

        <div
          className={cls.underline}
          style={{
            width: underlineWidth,
            transform: `translateX(${underlineLeft}px)`,
          }}
        />
      </div>
      <div className={`${cls.content} ${contentClass}`}>
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
