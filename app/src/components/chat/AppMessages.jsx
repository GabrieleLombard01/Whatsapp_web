import React, { useState } from 'react';
import data from '../../data/data.json';

function Messages({ selectedContact }) {
    const [messages, setMessages] = useState(selectedContact ? selectedContact.messages : []);

    React.useEffect(() => {
        setMessages(selectedContact ? selectedContact.messages : []);
    }, [selectedContact]);

    return (
        <>
            {/* chat messages */}
            <section className="flex-grow-1 overflow-auto bg-chat-image">
                <ul className="px-3">
                    {messages.map(message => (
                        <li key={message.id} className={`message-container p-3 ${message.status}`}>
                            <div className="message p-2 rounded-3">
                                <p>{message.message}</p>
                                <time dateTime={message.date}>{message.date}</time>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Messages;
