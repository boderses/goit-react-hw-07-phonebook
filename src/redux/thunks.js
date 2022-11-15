import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, createContact, deleteContact } from '../api/service';

export const contactsFetchStart = createAsyncThunk(
  'CONTACTS_FETCH_START',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchContacts();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const contactCreateThunk = createAsyncThunk(
  'CONTACT_CREATE_THUNK',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await createContact(data);
      await dispatch(contactsFetchStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const contactDeleteThunk = createAsyncThunk(
  'CONTACT_DELETE_THUNK',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      await deleteContact(data);
      await dispatch(contactsFetchStart());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
