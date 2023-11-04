import {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Portal from 'shared/ui/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
  className?: string;

  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    children,
    isOpen,
    onClose,

  } = props;

  const closeHandler = useCallback(() => {
    onClose();
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
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
