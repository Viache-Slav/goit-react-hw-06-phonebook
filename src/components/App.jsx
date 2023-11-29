import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, deleteContact, setFilter } from '../redux/actions';
import store from '../redux/store';
import css from './app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.data);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newName, newNumber) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase() || contact.number === newNumber
    );

    if (existingContact) {
      alert(`${newName} or ${newNumber} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: newName,
        number: newNumber,
      };

      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Provider store={store}>
      <div className={css.body}>
        <h1>Phone Book</h1>
        <ContactForm
          onSubmit={handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    </Provider>
  );
};

export default App;


