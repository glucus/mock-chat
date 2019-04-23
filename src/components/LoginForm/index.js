import React, {Component} from 'react';

class LoginForm extends Component {

    state = {
        telephone: '',
        userName: '',
        errors: 'aaa'
    };

    submitLoginForm = () => {
        console.log('login form submit invoked');
        // call to api passing user id as parameter to create listener;
    };

    handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({
            [field]: value
        })
    };

    render () {

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
                               onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="userName">
                        <input type="text"
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