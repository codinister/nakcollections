'use client';

import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  total: string;
  cart: object;
};

const initialState: initialStateType = {
  total: '4',
  cart: {
    ['37a-f235-46fb-bbec-431a5cd0ec23'] : {}
  },
};



const slice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart(state,  payload ) {
      state.total = payload.payload;
    },
  },
});

export default slice.reducer;

export const { addToCart } = slice.actions;
