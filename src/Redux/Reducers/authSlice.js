import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    user : {}
  };
  
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
   
    setAccessToken: (state,action) => {
        state.accessToken = action.payload;
      },

    setuser: (state,action) => {
        state.user=action.payload;
      },

      logout: (state, action) => {
       // state.isAuthenticated = action.payload
        state.user = {}
        state.accessToken = ''
      },
    

  }
});

export const { setAccessToken,   setuser , logout} = authSlice.actions;

export default  authSlice.reducer;

