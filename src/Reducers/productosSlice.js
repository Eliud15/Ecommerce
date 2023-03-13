import { createSlice } from '@reduxjs/toolkit'

const initialState = 
    {
        name: 'Café americano',
        price: '$3.5',
        description: 'Café preparado con agua caliente y servido en taza.',
        imagen: null,
    }


export const ProductSlice = createSlice({
  name: 'Product',
  initialState:initialState,
  reducers: {
    addProduct: (state, action) =>{
        state.name = action.payload.nombre
        state.price = action.payload.price
        state.description = action.payload.description
        state.imagen = action.payload.imagen
        
    }
  }
})

export const { addProduct } = ProductSlice.actions

export default ProductSlice.reducer