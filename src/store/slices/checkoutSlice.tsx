import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Info = {
  fullname: string,
  email: string,
  address: string,
  phone: string,
};

const initialState = {
  fullname: '',
  email: '',
  address: '',
  phone: '',
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    createCheckOutInfo: (state, { payload }: PayloadAction<Info>) => {
      state.fullname = payload.fullname 
      state.email = payload.email 
      state.address = payload.address
      state.phone = payload.phone
      localStorage.setItem('checkout_info', JSON.stringify(payload))
    },
  }
});

export const checkoutReducer = checkoutSlice.reducer;
export const { createCheckOutInfo } = checkoutSlice.actions;
