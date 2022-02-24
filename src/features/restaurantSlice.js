
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      name: "Gıpta Et",
      type: "Vegan",
      city: "Ankara",
      district: "Mamak"

    },
    {
      id: 2,
      name: "Nusret Et",
      type: "Vegan",
      city: "Ankara",
      district: "Mamak"

    },
    {
      id: 3,
      name: "Murat Et",
      type: "Vegan",
      city: "Ankara",
      district: "Mamak"

    },
    {
      id: 4,
      name: "Dilan Rulo",
      type: "Vejetaryan",
      city: "Ankara",
      district: "Mamak"

    },
    {
      id: 5,
      name: "Çağlar Kebap",
      type: "Etçil",
      city: "Ankara",
      district: "Çankaya"

    },
    {
      id: 6,
      name: "Serdal Pizza",
      type: "Karışık",
      city: "Ankara",
      district: "Etimesgut"

    }
  ]
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("State:::", current(state.data));
      console.log("Action:::", action.payload);

      let id = 0;
      console.log("satate data leghnt::::", state.data.length)
      id = state.data[state.data.length - 1].id;

      //action.payload.id=myObj.id;
      action.payload = {
        ...action.payload,
        id: id + 1
      }
      console.log(action.payload.id);

      //state.data.push(action.payload);
      state.data = [
        ...state.data,
        action.payload
      ]

    },
    del: (state, action) => {
      console.log("basıldı", action.payload);
      let newData = state.data.filter((item) => item.id != action.payload.id)
      state.data = newData;
    },
    update: (state, action) => {
      console.log("State:::", current(state.data));
      console.log("Action:::", action.payload);
      
      const newData = state.data.map((item) => {
        if(item.id == action.payload.id){
          return action.payload;
        }
        return item;
      });
      state.data = newData;
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, del, update } = restaurantSlice.actions;
export default restaurantSlice.reducer;