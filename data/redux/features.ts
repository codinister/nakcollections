'use client';

import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  total: string;
  cart: object;
};

const initialState: initialStateType = {
  total: '0',
  cart: {},
};

const slice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart(state, payload) {
      state.cart = { ...state.cart, ...payload.payload };

      state.total = Object.values(state.cart).reduce((a, b) => {
        return Number(b.price) + Number(a);
      }, 0);
    },
    deleteCart(state, payload) {
      state.cart = { ...payload.payload };
      state.total = Object.values(state.cart).reduce((a, b) => {
        return Number(b.price) + Number(a);
      }, 0);
    },
  },
});

export default slice.reducer;

export const { addToCart, deleteCart } = slice.actions;
