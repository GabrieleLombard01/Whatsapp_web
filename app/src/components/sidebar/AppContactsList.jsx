// AppContactsList.jsx
import React from 'react';

function ContactsList({ onContactClick, contacts }) {
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
