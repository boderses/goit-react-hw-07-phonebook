import { createSlice } from '@reduxjs/toolkit';
import {
  contactsFetchStart,
  contactCreateThunk,
  contactDeleteThunk,
} from './thunks';

const initialState = {
  contacts: [],
  contact: {},
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(contactsFetchStart.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactsFetchStart.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(contactsFetchStart.rejected, state => {
        state.error = true;
      })
      .addCase(contactCreateThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactCreateThunk.fulfilled, (state, action) => {
        state.contact = action.payload;
      })
      .addCase(contactCreateThunk.rejected, state => {
        state.error = true;
      })
      .addCase(contactDeleteThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(contactDeleteThunk.fulfilled, (state, action) => {
        state.contact = action.payload;
      })
      .addCase(contactDeleteThunk.rejected, state => {
        state.error = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { changeFilter } = contactsSlice.actions;
