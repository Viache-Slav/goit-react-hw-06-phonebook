import React, { useState } from 'react';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  // Stan dla przechowywania wartości wprowadzonych przez użytkownika.
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Obsługa przesłania formularza.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Wywołanie funkcji przekazanej jako prop onSubmit z wartościami z formularza.
    onSubmit(name, number);
    // Zresetowanie stanu po przesłaniu formularza.
    setName('');
    setNumber('');
  };

  return (
    <>
    {/* Formularz dodawania kontaktu. */}
      <form className={css.form} onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input className={css.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name'
        />{' '}

        <h2>Number</h2>
        <input className={css.input}
          type="tel"
          name="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder='Enter number'
        />{' '}

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;


