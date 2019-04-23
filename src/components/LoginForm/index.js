import React, {Component} from 'react';

class LoginForm extends Component {

    state = {
        telephone: '',
        userName: '',
        errors: null
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
                    <label htmlFor="telephone">
                        <input type="tel"
                               value={telephone}
                               id="telephone"
                               name="telephone"
                               placeholder=""
                               onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="userName">
                        <input type="text"
                               value={userName}
                               id="userName"
                               name="userName"
                               onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit"
                            className={(errors === null) ? "submit_btn" : "submit_btn_disabled"}>
                        Готово
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;