import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
