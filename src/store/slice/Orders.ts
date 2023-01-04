import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrders } from 'types';

const initialState = {
  startCoord: [59.846, 30.294],

  orderList: [
    {
      key: '1',
      startLat: 59.84660399,
      startIng: 30.29496392,
      endLat: 59.82934196,
      endIng: 30.42423701,
    },
    {
      key: '2',
      startLat: 59.82934196,
      startIng: 30.4243701,
      endLat: 59.82761295,
      endIng: 30.41705607,
    },
    {
      key: '3',
      startLat: 59.83567701,
      startIng: 30.38064206,
      endLat: 59.84660399,
      endIng: 30.29496392,
    },
    {
      key: '4',
      startLat: 59.84660399,
      startIng: 30.29496392,
      endLat: 59.82761295,
      endIng: 30.41705607,
    },
    {
      key: '5',
      startLat: 59.83567701,
      startIng: 30.38064206,
      endLat: 59.84660399,
      endIng: 30.29496392,
    },
  ],

  startingPoint: [59.84660399, 30.29496392],
  endPoint: [59.82934196, 30.42423701],
};

const Orders = createSlice({
  name: 'orders',
  initialState,

  reducers: {
    handleChangeSelectionOrder(state, action: PayloadAction<IOrders[]>) {
      const order = action.payload[0];

      state.startingPoint = [order.startLat, order.startIng];
      state.endPoint = [order.endLat, order.endIng];
    },
  },
});

export const { handleChangeSelectionOrder } = Orders.actions;
export const OrdersReducer = Orders.reducer;
