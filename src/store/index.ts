import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counter_slice';
import dogsApiSlice from 'features/dogs/dogs_api_slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
