import { createSlice } from '@reduxjs/toolkit';

import axiosInstance from '../../../utils/axios';

const initialState = {
    posts: [],
    loading: false
};

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        fetchPostsLoading(state) {
            state.loading = true;
        },
        fetchPostsSuccess(state, { payload: { data } }) {
            state.loading = false;
            state.posts = data;
        },
        fetchPostsFail(state) {
            state.loading = true;
        },
        clearPosts(state) {
            state.posts = [];
        }
    }
});

export const { fetchPostsFail, fetchPostsSuccess, fetchPostsLoading, clearPosts } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsLoading());
    try {
        const data = await axiosInstance.get('/posts');
        dispatch(fetchPostsSuccess(data));
    } catch (e) {
        dispatch(fetchPostsFail(e.response));
    }
};

export default postsSlice.reducer;
