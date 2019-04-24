import React, {Component} from 'react';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            telephone: '',
            userName: '',
            errors: null
        };
    };

    submitLoginForm = (e) => {
        console.log('login form submit invoked');
        // call to api passing user id as parameter to create listener;
        e.preventDefault();
        this.props.onLoginSubmit(e);
    };

    handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({
            [field]: value
        })
    };


    handlePhoneInput = (e) => {
        const value = e.target.value;

        const notNumbers = /\D/;

        if (value.match(notNumbers)) {
            // console.log('num number input');
        } else {
            this.setState({
                telephone: value
            });
        }
    }

    render (props) {

        const {telephone, userName, errors} = this.state;

        return (
            <div className="loginForm">
                <form onSubmit={this.submitLoginForm}>
                    <p className="loginForm__heading">
                        Чтобы начать общение, введите свой номер телефона и имя
                    </p>
                    <label htmlFor="telephone">
                        <input type="tel"
                               value={telephone}
                               id="telephone"
                               name="telephone"
                               placeholder="Номер телефона"
                               onChange={this.handlePhoneInput}
                        />
                    </label>
                    <label htmlFor="userName">
                        <input type="text"
                               maxLength={30}
                               value={userName}
                               id="userName"
                               name="userName"
                               placeholder="Ваше имя"
                               onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit"
                            className={(errors === null) ? "loginForm_btn" : "loginForm_btn disabled"}
                            disabled={(errors !== null)}
                    >
                        Готово
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;