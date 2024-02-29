import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface listData {
    id: number;
    txt: string;
}

interface AddDelState {
    data: listData[];
    counter: number;
}

const initialState: AddDelState = {
    data: [],
    counter: 0,
};

const addDelSlice = createSlice({
    name: 'addDel',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            const newItem: listData = {
                id: state.counter + 1,
                txt: action.payload,
            };
            state.data.push(newItem);
            state.counter += 1;
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const idToDelete = action.payload;
            state.data = state.data.filter((item) => item.id !== idToDelete);
        },
    },
});

export const { addItem, deleteItem } = addDelSlice.actions;
export default addDelSlice.reducer;
