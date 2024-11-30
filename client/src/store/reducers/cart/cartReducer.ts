import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../../../types/CartType";
const inititalState:CartType[] | [] = []
const CartSlice = createSlice({
  name: "cart",
  initialState: inititalState,
  reducers:{
    addtoCart:(state:any,action)=>{
        const exist = state?.find((item:any)=>item._id===action.payload._id)
        if(exist){
         const existingIndex = state.findIndex((item:any)=>item._id === action.payload._id);
         state[existingIndex].quantity += 1
        }
        else{
            state.push({...action.payload,quantity:1})
        }
    },
    removeFromCart:(state:CartType[],action)=>{
      return state.map((item:CartType)=>{
        if(item._id===action.payload._id){
          return {...item,quantity:Math.max(1,item.quantity-1)}
        }
        else{
          return item;
        }
       })
  },
  deleteFromCart:(state:CartType[],action)=>{
    return state.filter((item:CartType)=>item._id!==action.payload._id)
  }
  },
  
});
export const {addtoCart,removeFromCart,deleteFromCart} = CartSlice.actions;
export default CartSlice.reducer;




// extraReducers:(builder)=>{
//   builder.addCase(fetchCartItems.fulfilled,(state,action)=>{
//     return action.payload;
//   })
//   builder.addCase(addToCartApi.fulfilled,(state:any,action:any)=>{
//     const exist = state.find((item:any) => item._id === action.payload._id);
//               if (exist) {
//                   const existingIndex = state.findIndex((item:any) => item._id === action.payload._id);
//                   state[existingIndex].quantity += 1;
//               } else {
//                   state.push({ ...action.payload, quantity: 1 });
//               }
//   })
// }
// export const fetchCartItems = createAsyncThunk('cart/cartitems',
//   async () =>{
//     try{
//     const response = await fetch('http://localhost:3001/api/cart',{credentials:'include'})
//     const result = await response.json();
//     return result;
//     }
//     catch(error){
//       console.log(error)
//     }
//   }
// )
// export const addToCartApi = createAsyncThunk("/cart/addtoCart",
//   async(item:any)=>{
//     try{
//       const response = await fetch('http://localhost:3001/api/addToCart',
//         {method:'POST',
//           credentials:'include',
//           headers:{
//             'Content-Type':'application/json',
//           },
//           body:JSON.stringify(item)})
//           const result = await response.json();
//           return result;
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
// )