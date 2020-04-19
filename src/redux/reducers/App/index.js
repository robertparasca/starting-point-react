import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    loading: false
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        increment(state) {
            state.loading = false;
            state.value += 1;
        },
        incrementLoading(state) {
            state.loading = true;
        }
    }
});

export const { increment, incrementLoading } = appSlice.actions;

export const incrementAsync = (value) => (dispatch) => {
    dispatch(incrementLoading());
    setTimeout(() => {
        dispatch(increment());
    }, 1000);
};

export default appSlice.reducer;
