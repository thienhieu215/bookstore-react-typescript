import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

export const store = configureStore({
  reducer
})

export type TStore = ReturnType<typeof store.getState>;
