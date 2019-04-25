import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telephone: '',
            userName: '',
            isPristine: {
                telephone: true,
                userName: true
            }
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

    handleBlur = (e) => {
        const field = e.target.name;

        console.log('blurred', field);

        this.setState({
            isPristine: {
                ...this.state.isPristine,
                [field]: false
            }
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

    checkErrors = ({telephone, userName}) => {

        const errors = {
            telephone: '',
            userName: ''
        };

        if (telephone.length < 1) {
            errors.telephone = 'обязательное поле';
        } else if (userName.length < 1) {
            errors.userName = 'обязательное поле';
        }
        // console.log(errors);
        return errors;
    };

    render(props) {

        const {telephone, userName} = this.state;

        const errors = this.checkErrors({telephone, userName});

        return (
            <form className="loginForm" onSubmit={this.submitLoginForm}>
                <p className="loginForm__heading">
                    Чтобы начать общение, введите свой номер телефона и имя
                </p>
                <div className="loginForm__form-group">
                    <input type="tel"
                           value={telephone}
                           id="telephone"
                           name="telephone"
                           placeholder="Номер телефона"
                           onChange={this.handlePhoneInput}
                           onBlur={this.handleBlur}
                           required
                    />
                </div>
                <div className="loginForm__form-group">
                    <input type="text"
                           maxLength={30}
                           value={userName}
                           id="userName"
                           name="userName"
                           placeholder="Ваше имя"
                           onChange={this.handleChange}
                           onBlur={this.handleBlur}
                           required
                    />
                </div>
                <div className="loginForm__form-group">
                    <button type="submit"
                            className={((errors.userName !== '') || (errors.telephone !== '')) ?
                                "loginForm_btn disabled" :
                                "loginForm_btn"
                            }
                            disabled={(errors.userName !== '') || (errors.telephone !== '')}
                    >
                        Готово
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;