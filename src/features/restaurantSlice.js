import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[
      {
          id:1,
          name:"Gıpta Et",
          type:"Vegan"

        },
      {
        id:2,
        name:"Nusret Et",
        type:"Vegan"
      },
      {
        id:3,
        name:"Murat Et",
        type:"Vegan"
      }
  ]
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function

export default restaurantSlice.reducer