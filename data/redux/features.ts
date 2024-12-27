'use client';

import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  total: string;
  cart: object;
  currency: string;
};

const initialState: initialStateType = {
  total: '0',
  cart: {},
  currency: 'cedi'
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
    setCurrency(state,payload){
      state.currency = payload.payload
    }
  },
});

export default slice.reducer;

export const { addToCart, deleteCart, setCurrency } = slice.actions;
