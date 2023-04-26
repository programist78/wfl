import { createSlice } from '@reduxjs/toolkit'

const twoauthSlice = createSlice({
  name: 'data',
  initialState: {
    twoauth: false,
    // cart: []
  },

  reducers: {
    changeTwoauth: (state) => {
      if (state.twoauth == false) {
        state.twoauth = true
      } else {
      }
    },
  },
})

export const selectIsTwoAuth = (state) => Boolean(state.data.twoauth)

export const twoauthReducer = twoauthSlice.reducer

export const { changeTwoauth } = twoauthSlice.actions
