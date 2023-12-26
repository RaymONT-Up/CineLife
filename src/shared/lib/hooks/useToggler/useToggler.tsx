import { useState } from 'react';

type UseTogglerReturnType = [boolean, () => void];

const useToggler = (initialState: boolean = false): UseTogglerReturnType => {
  const [isToggled, setIsToggled] = useState<boolean>(initialState);

  const toggle = (): void => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, toggle];
};

export default useToggler;
