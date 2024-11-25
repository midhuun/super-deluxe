import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductApiThunk";
const ProductSlice = createSlice({
    name: "products",
    initialState: {
        items: {},
        status: "idle",
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
    }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.items = action.payload;
        }),
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.status = 'failed'
        })
}
});

export default ProductSlice.reducer;