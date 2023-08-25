import React, { useState } from "react";
import PropTypes from 'prop-types';

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };
        
    return (
        <form
            onSubmit={handleSubmit}
            className="submit_form">
            <label className="label">
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className="label">
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className="submit_btn">Add contact</button>
        </form>
    )
    };

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;