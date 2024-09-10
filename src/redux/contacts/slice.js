import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logout } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const hideLoading = (state) => {
  state.loading = false;
};

const pendingState = (state) => {
  state.loading = true;
  state.error = null;
};

const rejectedState = (state, action) => {
  hideLoading(state);
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, pendingState);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      hideLoading(state);
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, rejectedState);

    builder.addCase(addContact.pending, pendingState);
    builder.addCase(addContact.fulfilled, (state, action) => {
      hideLoading(state);
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, rejectedState);

    builder.addCase(deleteContact.pending, pendingState);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      hideLoading(state);
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, rejectedState);
    builder.addCase(logout.fulfilled, (state) => {
      state.items = [];
      state.error = null;
      state.loading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
