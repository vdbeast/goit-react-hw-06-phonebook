import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} onDelete={() => onDelete(contact.id)} />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList;