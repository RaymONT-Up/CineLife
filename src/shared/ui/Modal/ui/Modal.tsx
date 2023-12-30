import {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal';
import CloseIcon from 'shared/assets/icons/CloseIcon.svg';
import Button from 'shared/ui/Button';
import useBodyLock from 'shared/lib/hooks/useBodyLock/useBodyLock';
import cls from './Modal.module.scss';

export enum ModalTheme {
  clear = 'clear',
  classic = 'classic'
}

export interface ModalProps {
  className?: string;
  classNameContent?: string;
  classNameOverlay?: string;
  theme?: ModalTheme,

  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;

  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    classNameContent = '',
    classNameOverlay = '',
    children,
    isOpen,
    onClose,
    lazy,

    theme = ModalTheme.classic,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // fix body scroll
  useBodyLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      // document.body.style.overflow = 'hidden';
      // document.body.style.paddingRight = 'var(--scroll-size)';
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);

        //   document.body.style.overflow = 'auto';
        // document.body.style.paddingRight = '0';
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);

      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return undefined;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div
          className={classNames(cls.overlay, {}, [classNameOverlay])}
          onClick={closeHandler}
        />
        <Button className={cls.closeBtn} onClick={closeHandler}>
          <CloseIcon />
        </Button>
        <div className={classNames(cls.content, {}, [classNameContent, cls[theme]])}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
