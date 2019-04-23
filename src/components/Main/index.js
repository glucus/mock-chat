import React, {Component} from 'react';
import LoginForm from '../LoginForm';

class Main extends Component {

    state = {};

    render() {
        return (
            <div className="chat">
                <LoginForm/>
            </div>
        );
    }
}

export default Main;