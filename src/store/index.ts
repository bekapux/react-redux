import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice: any = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      // @ts-ignore: Unreachable code error
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
    type: "song/addSong",
    payload: "New Song!!!",
});
const laterState = store.getState();
console.log(JSON.stringify(laterState));
