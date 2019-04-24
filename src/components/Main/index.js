import React, {Component} from 'react';
import LoginForm from '../LoginForm';
import Chat from '../Chat';

class Main extends Component {

  state = {
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

  render() {
    const {chatOpened} = this.state;

    return (
      <div className="chat">
        <Chat chatOpened={chatOpened}
              closeChat={this.closeChat}
        />
        {!chatOpened && <LoginForm onLoginSubmit={this.openChat} />}
      </div>
    );
  }
}

export default Main;