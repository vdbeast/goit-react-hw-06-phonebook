import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
};

export default ContactList;