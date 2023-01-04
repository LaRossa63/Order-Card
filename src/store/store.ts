import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { OrdersReducer } from './slice';

const rootReducer = combineReducers({
  orders: OrdersReducer,
});

export const Store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
