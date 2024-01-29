import ChatHeader from './chat/AppHeader'
import ChatMessages from './chat/AppMessages'
import ChatFooter from './chat/AppFooter'
import UserSection from './sidebar/AppUserSection'
import Notifications from './sidebar/AppNotifications'
import Search from './sidebar/AppSearch'
import ContactsList from './sidebar/AppContactsList'
import data from '../data/data.json';
import { useState } from 'react'

function Layout() {
  
  const [selectedContact, setSelectedContact] = useState(null);

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    return (
      <>
        <div id="content" className="h-100 d-flex align-items-center justify-content-center">
          <main className="container shadow bg-white">
            <div className="row h-100">

            {/* SIDEBAR SECTION */}
            <section id="sidebar" className="col-4 p-0 h-100 bg-light-gray d-flex flex-column">
              <UserSection/>
              <Notifications/>
              <Search/>
              <ContactsList onContactClick={handleContactClick}/>
            </section>

            {/* CHAT SECTION */}
            <section id="chat" className="col-8 p-0 h-100 bg-chat-color d-flex flex-column ">
              <ChatHeader selectedContact={selectedContact}/>
              <ChatMessages selectedContact={selectedContact}/>
              <ChatFooter/>
            </section>

            </div>
          </main>
        </div>
      </>
    )
  }
  
  export default Layout
