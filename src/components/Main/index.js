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

  toggleChat = (e) => {
    this.setState({
      chatOpened: !this.state.chatOpened
    })
  };

  render() {
    const {chatOpened} = this.state;

    return (
      <div className="chat">
        {chatOpened ?
          <Chat /> :
          <div className="chat__messages"/>
        }
        <LoginForm onLoginSubmit={this.openChat} />
      </div>
    );
  }
}

export default Main;