import { Dispatch, SetStateAction, useState } from 'react';

type UseTogglerReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useToggler = (initialState: boolean = false): UseTogglerReturnType => {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  const toggle = (newValue?: boolean): void => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, toggle, setIsToggled];
};

export default useToggler;
