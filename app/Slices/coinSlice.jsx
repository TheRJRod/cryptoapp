import { createSlice } from "@reduxjs/toolkit"

const coinImages = {image:'tether'}

 export const coinSlice = createSlice({
  name: 'coin',
  initialState: "tether",
  reducers: {
    changeCoin: (state,action) => (
      state = action.payload
    )
  }
 })

 export const {changeCoin} = coinSlice.actions;
 export default coinSlice.reducer;