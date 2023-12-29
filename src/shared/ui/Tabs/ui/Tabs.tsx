import {
  FC, MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import Loader from 'shared/ui/Loader';
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
  const [buttonWidth, setButtonWidth] = useState(0);

  const buttonsRef = useRef(null);

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const activeTabEl = buttonsRef?.current?.querySelector(`.${cls.active}`);
    const width = activeTabEl?.offsetWidth;
    const left = activeTabEl?.offsetLeft;

    setUnderlineWidth(width);
    setUnderlineLeft(left);
  }, [activeTab]);

  useEffect(() => {
    setButtonWidth(buttonsRef.current.clientWidth / TabsList.length);
  }, [TabsList]);

  const btnOnClick = (newTab: Tab) => {
    setActiveTab((prev) => {
      if (prev.id !== newTab.id) return newTab;
      return prev;
    });
  };

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - buttonsRef.current.offsetLeft);
    setScrollLeft(buttonsRef.current.scrollLeft);
  };
  // scroll x
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging) return;
    const x = e.pageX - buttonsRef.current.offsetLeft;
    const walk = (x - startX) * 1.1;
    buttonsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    setIsDragging(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames(cls.Tabs, {}, [className])}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
        {isLoading ? <Loader /> : activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
