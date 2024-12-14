'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

type sliceType = {
  cart: string[];
};

type payloadType = { payload: string };

const slice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart(state: sliceType, { payload }: payloadType) {
      state?.cart.push(payload);
    },
  },
});

export default slice.reducer;

export const { addToCart } = slice.actions;
