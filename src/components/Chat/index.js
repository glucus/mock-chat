import React, {Component} from 'react';
import ChatMessages from '../ChatMessages';

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
            e.preventDefault();
            this.sendMessage(this.state.currentMessageText);
        }
    };

    sendMessage = (messageText) => {
        const authorId = this.props.authorId;
        // const time = getCurrentTime();
        const id = this.state.messages.length;

        const newMessage = {
            id: id,
            authorId: authorId,
            text: messageText//,
            // time: time,
        };

        if (newMessage.text.length > 0) {
            this.setState({
                currentMessageText: '',
                messages: [...this.state.messages, newMessage]
            });
        }
    };


    render(props) {

        const {currentMessageText} = this.state;
        const {chatOpened, closeChat} = this.props;

        return (
            <div>
                {!chatOpened ?
                    <div className="chat__messages"/>
                    :
                    <div>
                        <div className="chat__header" onClick={this.toggleChatModal}>
                            <div className="chat__header__text">
                                Онлайн чат с поддержкой
                            </div>
                            {chatOpened && <button
                                className="chat__closeButton"
                                onClick={closeChat}>
                                X
                            </button>}
                        </div>
                        <ChatMessages messages={this.state.messages}/>
                        <div className="chat__footer">
                            <form className="chat__currentMessage">
                                <textarea rows={1}
                                          value={currentMessageText}
                                          id="currentMessage"
                                          name="currentMessage"
                                          placeholder="Введите ваше сообщение"
                                          onChange={this.handleMessageInput}
                                          onKeyDown={this.handleKeyDown}
                                >{currentMessageText}</textarea>
                            </form>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Chat;