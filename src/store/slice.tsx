import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  sermons: object[];
  series: object[];
}

const initialState: AppState = {
  sermons: [],
  series: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveSermons: (state, {payload}) => {
      state.sermons = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {saveSermons} = appSlice.actions;

export default appSlice.reducer;

// incrementByAmount: (state, action: PayloadAction<number>) => {
//   state.value += action.payload;
// },
