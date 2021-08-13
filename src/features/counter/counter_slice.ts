import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    increment(state) {
      state.value += 1;
    },

    // decrement
    decrement(state) {
      state.value -= 1;
    },

    // reset
    reset(state) {
      state.value = initialState.value;
    },

    // increment by custom count
    addCount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, addCount } = counterSlice.actions;
export default counterSlice.reducer;
