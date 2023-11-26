import { createAction } from '@reduxjs/toolkit';

// Definicje typów akcji, używanych do identyfikowania różnych rodzajów akcji w aplikacji Redux.
export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filterSlice/setFilter';

// Tworzenie akcji za pomocą funkcji createAction z Redux Toolkit.
export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const setFilter = createAction(SET_FILTER);