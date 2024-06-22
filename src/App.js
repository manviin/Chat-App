import Contact from "./Components/Contact";
import Conversation from "./Components/Conversation";
import { data } from "./data";
import { useState, useEffect } from "react";

function App() {
  // State to keep track of the currently active user
  const [activeUser, setActiveUser] = useState(null);
  // State to manage the contacts
  const [contacts, setContacts] = useState(data);

  // To reset activeUser if the user is removed from contacts
  useEffect(() => {
    if (!contacts.find(user => user.userId === activeUser?.userId)) {
      setActiveUser(null);
    }
  }, [contacts,activeUser]);

  //  setting unreadCount to 0 for the selected user
  function handleContactClick(user) {
    const updatedContacts = contacts.map(contact =>
      contact.userId === user.userId ? { ...contact, unreadCount: 0 } : contact
    );
    setContacts(updatedContacts);
    setActiveUser(user);
  }

  // deleting a contact
  function filterContacts(id) {
    const filteredContacts = contacts.filter(user => user.userId !== id);
    setContacts(filteredContacts);
  }

  // marking a message as unread
  function handleUnreadMessage(id) {
    const updatedContacts = contacts.map(contact =>
      contact.userId === id ? { ...contact, unreadCount: contact.lastUnreadCount } : contact
    );
    setContacts(updatedContacts);
  }

  return (
    <div className="boxes">
      <Contact
        data={contacts}
        onContactClick={handleContactClick}
        onDelete={filterContacts}
        onUnread={handleUnreadMessage}
      />
      {activeUser && <Conversation data={activeUser} />}
    </div>
  );
}

export default App;
