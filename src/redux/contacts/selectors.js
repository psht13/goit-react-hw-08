import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

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
