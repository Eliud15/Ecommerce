import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productosSlice from '../Reducers/productosSlice';
export const store = configureStore({
  reducer: {
    productos :  productosSlice
  }
})

export default Provider;