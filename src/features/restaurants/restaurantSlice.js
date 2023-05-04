import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  names: [],
  loading: false,
  error: '',
}

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  () => {
    return axios
      .get('http://localhost:4400/restaurants')
      .then(response => response.data)
  }
)

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestaurants.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.loading = false
      state.names = action.payload
      state.error = ''
    })
    builder.addCase(fetchRestaurants.rejected, (state, action) => {
      state.loading = false
      state.names = []
      state.error = action.error.message || 'Unable to fetch restaurants'
    })
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default restaurantSlice.reducer
