import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemInCart = {
  isbn13: string,
  title: string,
  price: string,
  quantity: string
};

const storage = JSON.parse(localStorage.getItem('cart') || '[]')
const numb = JSON.parse(localStorage.getItem('numbItems') || '0')

const initialState = {
  cartItems: storage,
  numbOfItems: parseInt(numb)
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {

    addToCart: (state, { payload }: PayloadAction<ItemInCart>) => {
      if (state.cartItems.length === 0) {
        state.cartItems = [payload]
      } else {
        if (state.cartItems.some((item: { isbn13: string; }) => item.isbn13 !== payload.isbn13)) {
          state.cartItems.push(payload)
        } else {
          let indexOfItem = state.cartItems.findIndex((item: { isbn13: string; }) => item.isbn13 === payload.isbn13)
          state.cartItems[indexOfItem].quantity = (parseInt(state.cartItems.find((item: { isbn13: string; }) => item.isbn13 === payload.isbn13).quantity) + parseInt(payload.quantity)).toString()
        }
      }
      state.numbOfItems += parseInt(payload.quantity)
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    increase: (state, { payload }: PayloadAction<ItemInCart>) => {
      let indexOfItem = state.cartItems.findIndex((item: { isbn13: string; }) => item.isbn13 === payload.isbn13)
      state.cartItems[indexOfItem].quantity = (parseInt(state.cartItems.find((item: { isbn13: string; }) => item.isbn13 === payload.isbn13).quantity) + 1).toString()
      state.numbOfItems += 1
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    reduce: (state, { payload }: PayloadAction<ItemInCart>) => {
      let indexOfItem = state.cartItems.findIndex((item: { isbn13: string; }) => item.isbn13 === payload.isbn13)
      if (parseInt(state.cartItems.find((item: { isbn13: string; }) => item.isbn13 === payload.isbn13).quantity) > 1) {
        state.cartItems[indexOfItem].quantity = (parseInt(state.cartItems.find((item: { isbn13: string; }) => item.isbn13 === payload.isbn13).quantity) - 1).toString()
        state.numbOfItems -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    removeFromCart: (state, { payload }: PayloadAction<ItemInCart>) => {
      let indexOfItem = state.cartItems.findIndex((item: { isbn13: string; }) => item.isbn13 === payload.isbn13)
      state.numbOfItems -= parseInt(payload.quantity)
      state.cartItems.splice(indexOfItem, 1)
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },

    clearCart: (state) => {
      state.cartItems.splice(0, state.cartItems.length)
      state.numbOfItems = 0
      localStorage.setItem('cart', JSON.stringify(state.cartItems.length > 0 ? state.cartItems : []))
      localStorage.setItem('numbItems', JSON.stringify(state.numbOfItems))
    },
  }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, increase, reduce, removeFromCart, clearCart } = cartSlice.actions;
