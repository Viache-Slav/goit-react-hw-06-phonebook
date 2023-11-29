import { createAction } from '@reduxjs/toolkit';

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filterSlice/setFilter';

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
export const setFilter = createAction(SET_FILTER);