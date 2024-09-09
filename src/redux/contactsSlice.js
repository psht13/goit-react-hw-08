import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectFilter } from './filtersSlice';

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

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectLoading = (state) => {
  return state.contacts.loading;
};

export const selectError = (state) => {
  return state.contacts.error;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

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
  },
});

export const contactsReducer = contactsSlice.reducer;
