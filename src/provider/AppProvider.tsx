import React, { FC, PropsWithChildren } from 'react';
import { BaseStyled } from 'theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <BaseStyled>{children}</BaseStyled>;
};
