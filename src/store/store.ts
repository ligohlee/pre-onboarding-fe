import { configureStore } from '@reduxjs/toolkit';
import addDelReducer from './addDelSlice';

export const store = configureStore({
    reducer: {
        addDel: addDelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
