import React, {Component} from 'react';
import ChatMessages from "./ChatMessages";

class Chat extends Component {

  state = {
    messages: [
      {
        id: 0,
        authorId: 'operator',
        text: 'Здравствуйте! Задайте, пожалуйста, вопрос',
        time: ''
      }
    ],
    currentMessageText: ''
  };

  handleMessageInput = (e) => {
    const value = e.target.value;

    this.setState({
      currentMessageText: value
    })
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      // console.log('pressed Enter');
      e.preventDefault();
      this.sendMessage(this.state.currentMessageText);
    }
  };

  sendMessage = (messageText) => {
    console.log('login form submit invoked');

    const authorId = this.props.authorId;
    const time = Date.now(); // getCurrentTime();
    const id = this.state.messages.length;

    const newMessage = {
      id: id,
      authorId: authorId,
      text: messageText,
      time: time,
    };

    console.log('newMessage', newMessage);

    // добавить асинхронность setState;
    this.setState({
      currentMessageText: '',
      messages: [...this.state.messages, newMessage]
    });

    console.log('new messages', this.state.messages);
  };


  render(props) {

    const {telephone, userName, errors} = this.state;

    const {currentMessageText} = this.state;

    return (
      <div>
        {
          this.props.chatOpened ?
            <div>
              <ChatMessages messages={this.state.messages}/>
              <form className="chat__currentMessage">
                <label htmlFor="currentMessage">
            <textarea
              rows={1}
              maxLength={300}
              value={currentMessageText}
              id="currentMessage"
              name="currentMessage"
              placeholder="Введите ваше сообщение"
              onChange={this.handleMessageInput}
              onKeyDown={this.handleKeyDown}
            >
              {this.state.currentMessageText}
            </textarea>
                </label>
              </form>
            </div>
            :
            <div className="chat__messages"/>
        }
      </div>
    );
  }
}

export default Chat;