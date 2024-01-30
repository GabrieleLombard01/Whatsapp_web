import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatHeader from './chat/AppHeader';
import ChatMessages from './chat/AppMessages';
import ChatFooter from './chat/AppFooter';
import UserSection from './sidebar/AppUserSection';
import Notifications from './sidebar/AppNotifications';
import Search from './sidebar/AppSearch';
import ContactsList from './sidebar/AppContactsList';

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7252/api/Chat');
        setContacts(response.data.contacts);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []); 

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = async (contactId, message) => {
    try {
      const response = await axios.post(
        `https://localhost:7252/api/Chat/addMessage/${contactId}`,
        { message, date: new Date(), status: 'sent' }, // Aggiungi date e status
        { headers: { 'Content-Type': 'application/json' } }
      );
      setContacts(response.data.contacts);
    } catch (error) {
      console.error('Error sending message:', error);
  
      if (error.response) {
        // Se la risposta contiene dati, visualizzali nella console
        console.error('Server response data:', error.response.data);
      }
  
      return updatedContacts;
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
            <div id="content" className="h-100 d-flex align-items-center justify-content-center">
                <main className="container shadow bg-white">
                    <div className="row h-100">

                        {/* SIDEBAR SECTION */}
                        <section id="sidebar" className="col-4 p-0 h-100 bg-light-gray d-flex flex-column">
                            <UserSection />
                            <Notifications />
                            <Search onSearchChange={handleSearchChange} />
                            <ContactsList onContactClick={handleContactClick} contacts={filteredContacts} />
                        </section>

                        {/* CHAT SECTION */}
                        <section id="chat" className="col-8 p-0 h-100 bg-chat-color d-flex flex-column ">
                            <ChatHeader selectedContact={selectedContact} />
                            <ChatMessages selectedContact={selectedContact} />
                            <ChatFooter selectedContact={selectedContact} onSendMessage={handleSendMessage} />
                        </section>

                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
