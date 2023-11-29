import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: contactsInitialState },
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactNames = state.data.map(contact => contact.name);
        
        if (contactNames.includes(action.payload.name)) {
          alert(`${action.payload.name} is alredy in contacts`);
        } else {
          state.data.push(action.payload);
          localStorage.setItem('contacts', JSON.stringify(state.data));
        }
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },

    deleteContact: (state, action) => {
      const updatedData = state.data.filter(contact => contact.id !== action.payload);
      
      state.data = updatedData;
      localStorage.setItem('contacts', JSON.stringify(updatedData));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;