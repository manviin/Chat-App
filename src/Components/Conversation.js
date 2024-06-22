function Conversation({ data }) {
  if (!data) return null;

  const { chat, userId } = data;

  // Flatten chat data into an array of message objects
  const flattenedChat = chat.flatMap(chatEntry =>
    Object.entries(chatEntry).map(([key, messageObj]) => ({
      sender: key,
      ...messageObj
    }))
  );

  return (
    <div className="conversation">
      <div className='header'>
        <div className='userInfo'>
          <img src={data.profilePictureURL} alt={data.name} />
          <div className='details'>
            <h3>{data.name}</h3>
            <p>Click here for contact info:</p>
          </div>
        </div>
        <div className='icons'>
          <span className="material-symbols-outlined">videocam</span>
          <span className="material-symbols-outlined">call</span>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      <div className="msg">
        {flattenedChat.map((messageObj, index) => {
          const className = messageObj.sender === userId ? 'user' : 'me';
          return (
            <div key={index} className={className}>
              <h3>{messageObj.message}</h3>
              <p>{messageObj.timeStamp}</p>
            </div>
          );
        })}
      </div>
      <div className="msgbox">
        <div className="icon">
          <span className="material-symbols-outlined">add</span>
        </div>
        <div className="icon">
          <span className="material-symbols-outlined">mic</span>
        </div>
        <div className="inputbox">
          <input placeholder={`Message ${data.name}`} />
          <span className="material-symbols-outlined">send</span>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
