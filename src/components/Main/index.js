import React, {Component} from 'react';
import LoginForm from '../LoginForm';
import Chat from '../Chat';

class Main extends Component {

    state = {
        chatOpened: false
    };

    openChat = () => {
        this.setState({
            chatOpened: true
        })
    };

    closeChat = () => {
        this.setState({
            chatOpened: false
        })
    };

render() {

    const {chatOpened} = this.state;

    return (
            <div className="chat">
                {chatOpened ? <Chat /> : <div className="chat__messages" />}
                <LoginForm onLoginSubmit={this.openChat} />
            </div>
        );
    }
}

export default Main;