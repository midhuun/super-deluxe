import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductApiThunk";
import { Category, Product, SubCategory } from "../../../types/CategoryType";
type itemsType = {
    products:Product[],
    categories:Category[],
    subCategories:SubCategory[],
    user:Object
}
type initialStateType ={
    items:itemsType| Object,
    status:string
}
const initialState:initialStateType | any= {
    items:{},
    status:'idle'
}
const ProductSlice = createSlice({
    name: "products",
   initialState,
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