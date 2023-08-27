import React, { useCallback } from "react";
import { useSelector, useDispatch  } from "react-redux";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { deleteContact } from "../redux/reducer";

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch()

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const handleDeleteContact = useCallback(contactId => {
    dispatch(deleteContact(contactId));
  }, [dispatch]);

  return (
       <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
      </div>
  );
};

export default App;
