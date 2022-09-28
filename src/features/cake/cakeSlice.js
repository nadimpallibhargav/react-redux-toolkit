import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        orderCake: (state) => {
            state.numberOfCakes--
        },
        restockCake: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer;
export const { orderCake, restockCake } = cakeSlice.actions;