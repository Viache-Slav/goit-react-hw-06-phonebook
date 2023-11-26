import { createSlice } from '@reduxjs/toolkit';

// Początkowy stan dla reduktora filtrów.
const filtersInitialState = { filter: '' };

// Utworzenie reduktora za pomocą createSlice z Redux Toolkit.
const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState, // Początkowy stan reduktora.
  reducers: {
    // Definicja akcji filterContact, która aktualizuje wartość filtru w stanie.
    filterContact(state, action) {
      state.filter = action.payload; // Aktualizacja wartości filtru na podstawie przekazanego payloadu z akcji.
    },
  },
});

export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
