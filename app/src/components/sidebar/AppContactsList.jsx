import React from 'react';
import data from '../../data/data.json';  

function ContactsList({ onContactClick }) {
    const { contacts } = data;

    return (
        <>
            <div id="contacts-list" className="flex-grow-1 bg-white overflow-auto">
                <ul className="m-0 p-0">
                    {contacts.map(contact => (
                        <li key={contact.id} className="media" onClick={() => onContactClick(contact)}>
                            <figure>
                                <img src={contact.avatar} alt={contact.name} />
                            </figure>
                            <div className="h6 media-text">
                                <div>{contact.name}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ContactsList;
