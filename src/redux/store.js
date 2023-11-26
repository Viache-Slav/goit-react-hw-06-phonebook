import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import { filtersReducer } from './filterSlice';

// Konfiguracja magazynu Redux za pomocą funkcji configureStore.
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});

export default store;
