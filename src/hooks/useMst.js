import * as React from 'react';

const mstContext = React.createContext(null);
export const { Provider } = mstContext;

export const useMst = () => {
  const store = React.useContext(mstContext);

  return store;
};
