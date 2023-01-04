import { AppProvider } from 'provider';
import React from 'react';
import { AppRouter } from 'router';

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
