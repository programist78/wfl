import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
  name: 'data',
  initialState: {
    admin: false,
  },

  reducers: {
    addAdmintoLocal: (state) => {
      if (state.admin == false) {
        state.admin = true
      } else {
      }
    },
    logout: (state) => {
      state.admin = false;
    },
  },
})

export const adminReducer = adminSlice.reducer

export const { addAdmintoLocal, logout } = adminSlice.actions
