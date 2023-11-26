import css from './filter.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterContact} from '../../redux/filterSlice';

const Filter = () => {
  // Pobranie funkcji dispatch i wartości filtra ze stanu za pomocą hooków useDispatch i useSelector z biblioteki react-redux
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  // Funkcja obsługująca zmiany w polu filtra
  const handleFilterChange = (event) => {
    // Pobranie nowej wartości filtra z eventu
    const newFilterValue = event.target.value;
    // Wywołanie akcji filterContact z nową wartością filtra przy użyciu funkcji dispatch
    dispatch(filterContact(newFilterValue));
  };

  // Renderowanie komponentu Filter
  return (
    <>
      <h3>Find contacts by name</h3>
      <input className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Make contact"
      />
    </>
  );
};

export default Filter;