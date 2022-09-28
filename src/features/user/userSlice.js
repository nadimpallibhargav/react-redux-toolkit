import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    user: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
});


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.user = action.payload,
            state.error = ''
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.user = [],
            state.error = action.error.message
        });
    }
});

export default userSlice.reducer;