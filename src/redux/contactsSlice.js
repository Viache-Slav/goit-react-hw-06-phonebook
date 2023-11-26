import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

// Początkowy stan dla danych kontaktów, pobierany z localStorage lub pusty tablicą
const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) || [];

// Utworzenie "slicu" dla kontaktów przy użyciu createSlice z Redux Toolkit
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: contactsInitialState },
  reducers: {
    // Reducer dla dodawania kontaktu
    addContact: {
      reducer(state, action) {
        // Pobranie tablicy nazw istniejących kontaktów
        const contactNames = state.data.map(contact => contact.name);
        
        // Sprawdzenie, czy nowa nazwa już istnieje w kontaktach
        if (contactNames.includes(action.payload.name)) {
          alert(`${action.payload.name} is alredy in contacts`);
        } else {
          // Jeśli nie, dodanie nowego kontaktu do danych i zapisanie w localStorage
          state.data.push(action.payload);
          localStorage.setItem('contacts', JSON.stringify(state.data));
        }
      },
      // Przygotowanie danych dla akcji dodawania kontaktu
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },

    // Reducer dla usuwania kontaktu
    deleteContact: (state, action) => {
      // Utworzenie zaktualizowanej tablicy danych bez usuniętego kontaktu
      const updatedData = state.data.filter(contact => contact.id !== action.payload);
      
      // Zaktualizowanie danych w stanie oraz zapisanie w localStorage
      state.data = updatedData;
      localStorage.setItem('contacts', JSON.stringify(updatedData));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;