import { createSlice } from '@reduxjs/toolkit';
import orderCake from '../cake/cakeSlice';

const initialState = {
    numberOfIceCream: 10
}

const iceCreamSlice = createSlice({
    name: 'IceCream',
    initialState: initialState,
    reducers: {
        orderIceCream: (state) => {
            state.numberOfIceCream--
        },
        restockIceCream: (state, action) => {
            state.numberOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(orderCake, (state) => {
            state.numberOfIceCream--
        });
    },
})

export default iceCreamSlice.reducer;
export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;