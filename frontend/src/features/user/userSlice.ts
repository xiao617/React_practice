import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
export interface UserState {
  name: string;
  id: string;
  score: number;
  status: 'admin' | 'user' | 'visitor';
}
export type userBody = {
  name: string;
  id?: string;
  score: number;
  status: string;
};
const initialState: UserState = {
  name: '',
  id: '',
  score: 0,
  status: 'visitor',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<userBody>) => {
      state.id = action.payload.id ?? '';
      state.name = action.payload.name;
      state.status = 'user';
      state.score = 0;
    },
    getUser: (state) => {
      return { id: state.id, name: state.name, status: state.status, score: state.score };
    },
  },
});

export const { userLogin, getUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
