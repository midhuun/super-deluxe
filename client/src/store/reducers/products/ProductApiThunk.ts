import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts= createAsyncThunk('products/fetchProducts', async (__,thunkApi) => {
    try{
    const response = await fetch("http://localhost:3001/products")
    if(!response.ok){
        thunkApi.rejectWithValue("Cannot get data");
    }
    const result= await response.json();
    return result;
} catch(err){
     thunkApi.rejectWithValue("Error")
}
});
