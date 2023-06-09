import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartItem {
  rating: any;
  rate: number;
  count: number;
  price: number;
  description: string;
  category: string;
  title: string;
  id: number;
  image: string;
  cartQuantity: number;
  itemPrice: number;
}


export interface cartState {
  cartItems: cartItem[];
}
const initialState: cartState = {
  cartItems: [],
};

export const carSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    additemtoCart: (state, action: PayloadAction<cartItem>) => {

        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
        if ( itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
          
        }
        else{
            const tempProduct = { ...action.payload, cartQuantity: 1};

            state.cartItems.push(tempProduct);
        }

    }, 

    decreaseitemfromCart: ( state, action: PayloadAction<cartItem>) => { 
     
     const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (action.payload.cartQuantity >= 2) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }

      else {
        state.cartItems[itemIndex]. cartQuantity = 1;
      }
    
    }
    ,

    removeitemfromCart: (state, action: PayloadAction<cartItem>) => { 
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
      
    }
  

   
}});

// Action creators are generated for each case reducer function
export const { additemtoCart,decreaseitemfromCart, removeitemfromCart } = carSlice.actions;

export default carSlice.reducer;
