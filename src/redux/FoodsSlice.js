import { createSlice } from '@reduxjs/toolkit';


export const foodsSlice = createSlice({
    name: 'foods',
    initialState: {
        selectedCategory:'ALL'
    },
    reducers: {
    
        filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
        },
    },
})

export const getSelectedCategory = state => state.foods.selectedCategory;
export const { filterCategory } = foodsSlice.actions;
export default foodsSlice.reducer;