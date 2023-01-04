import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'store';
import { BaseStyled } from 'theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseStyled>
      <Provider store={Store}>{children}</Provider>
    </BaseStyled>
  );
};
