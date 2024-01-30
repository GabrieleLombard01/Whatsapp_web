import React, { useState, useEffect } from 'react';

function Messages({ selectedContact }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(selectedContact ? selectedContact.messages : []);
    }, [selectedContact]);

    return (
        <>
            {/* chat messages */}
            <section className="flex-grow-1 overflow-auto bg-chat-image">
                <ul className="px-3">
                    {messages && messages.map(message => (
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

