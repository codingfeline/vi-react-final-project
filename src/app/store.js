import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@features/auth/authSlice'
import counterReducer from '@features/counter/counterSlice'
import pathReducer from '@features/path/pathSlice'
import restaurantReducer from '@features/restaurants/restaurantSlice'
import userReducer from '@features/user/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    path: pathReducer,
    restaurants: restaurantReducer,
    user: userReducer,
  },
})
