import React, {Component} from 'react';
import LoginForm from '../LoginForm';
import Chat from '../Chat';

class Main extends Component {

  state = {
    chatModalOpened: false,
    chatOpened: false
  };

  openChat = (e) => {
    this.setState({
      chatOpened: true
    })
  };

  closeChat = (e) => {
    this.setState({
      chatOpened: false
    })
  };

  toggleChatModal = (e) => {
    this.setState({
      chatModalOpened: !this.state.chatModalOpened
    })
  };

  render() {
    const {chatModalOpened, chatOpened} = this.state;

    return (
      <div>
        {!chatModalOpened && <div className="chat__toggle" onClick={this.toggleChatModal}>
          <div className="chat__toggle__text">
            Онлайн чат с поддержкой
          </div>
        </div>}
        {chatModalOpened &&
        <div className="chat">
          <Chat chatOpened={chatOpened}
                closeChat={this.closeChat}
          />
          {!chatOpened && <LoginForm onLoginSubmit={this.openChat}/>}
        </div>}
      </div>
    );
  }
}

export default Main;