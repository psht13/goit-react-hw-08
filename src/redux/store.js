import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// {
//   "requestId": "$datatype.uuid",
//   "items": "$mockData",
//   "count": "$count",
//   "anyKey": "anyValue"
// }
