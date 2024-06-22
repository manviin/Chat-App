import { useState } from "react";

function Contact({ data, onContactClick, onDelete, onUnread }) {
  // State to manage the current active modal
  const [modal, setModal] = useState(null);

  // Toggling modal 
  function handleClick(userId, event) {
    event.stopPropagation();
    setModal(modal === userId ? null : userId);
  }

  //  marking a message as unread
  function handleUnread(userId, event) {
    event.stopPropagation();
    onUnread(userId);
    setModal(null);
  }

  return (
    <div className="chatbox">
      <h2>Chats</h2>
      {data.map(user => (
        <div
          key={user.userId}
          onClick={() => onContactClick(user)}
          className='chatuser'
        >
          <img src={user.profilePictureURL} />
          <div className='details'>
            <h3>{user.name}</h3>
            <p>{Object.values(user.chat[user.chat.length - 1]).pop().message}</p>
          </div>
          {user.unreadCount > 0 && (
            <div className="unread-count">
              {user.unreadCount}
            </div>
          )}
          <span onClick={(event) => handleClick(user.userId, event)} className="material-symbols-outlined">more_vert</span>
          {modal === user.userId && <div onClick={(event) => event.stopPropagation()} className="modal">
            <p onClick={(event) => handleUnread(user.userId, event)}> Mark as Unread</p>
            <p onClick={() => onDelete(user.userId)}> Delete </p>
            <p onClick={(event) => handleClick(user.userId, event)}> cancel </p>
          </div>}
        </div>
      ))}
    </div>
  );
}

export default Contact;
