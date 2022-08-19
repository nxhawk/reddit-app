import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Nguyen Nhat Hao",
    age: "19",
    about: "I'm a sortware engineer",
    avaUrl:
      "https://i.redd.it/snoovatar/avatars/244366b9-5019-468c-8093-e2d9ebfb9b81.png",
    theme: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },

    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },

    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.theme = action.payload.theme;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;

export default userSlice.reducer;
