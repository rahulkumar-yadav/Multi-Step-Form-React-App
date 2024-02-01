import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    personalDetails: {},
    address: {},
    paymentDetails: {},
  },
  reducers: {
    updatePersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    updatePaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const {
  updatePersonalDetails,
  updateAddress,
  updatePaymentDetails,
} = formSlice.actions;

export default formSlice.reducer;
