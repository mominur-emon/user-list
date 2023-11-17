import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    showUser: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, age } = action.payload;
      const isExistUser = state.users.filter((user) => user.id === id);
      if (isExistUser) {
        isExistUser[0].name = name;
        isExistUser[0].email = email;
        isExistUser[0].age = age;
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { showUser, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
