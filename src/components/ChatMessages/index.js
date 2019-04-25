import React from 'react';

const ChatMessages = ({messages}) => {
  return (
    <div className="chat__messages">
      {messages && messages.map(
        message => (
          <div key={message.id}
               className={(message.authorId === 'operator') ?
                 "chat__messages__operatorMessage"
                 :
                 "chat__messages__message"}
          >
            <div className="message__text">
              {message.text}
            </div>
          </div>
        )
      )}
    </div>
  )
};

export default ChatMessages;