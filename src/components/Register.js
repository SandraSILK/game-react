import React, { Component } from 'react';
import axios from 'axios';
import Config from './../Configuration/Config';
import { resolve } from 'q';
import Alert from './Alert.js';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmedPassword: '',
        alertMessage: '',
        show: false,
        errors: [],
    };

    submitHandler = (event) => {
        event.preventDefault();
        const config = new Config();
        const store =  new Promise((resolve, reject) => {
            axios.post(`${config.apiPath}/register`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.confirmedPassword
            })
            .then((response) => {
                (response.status >= 200 && response.status < 300) ? resolve() : reject(response.response.data);
            })
            .catch((error) => {
                reject(error.response.data);
            });
        });

        store.then((response) => {
            this.setAlertMessage('Użytkownik został poprawnie zarejestrowany.');
            this.setShowState();
        })
        .catch((error) => {
            const errors = error.errors;
            for (let i in errors) {
                this.setState(prevState => ({
                    errors: [...prevState.errors, errors[i]]
                }))
            }
            this.setShowState();
        })
    }

    setShowState() {
        this.setState({ show: !this.state.show });
    }

    render() {
        const alert = this.state.errors.map((message, key) => {
            return (
                <Alert key={key} message={message} />
            )
        });

        return (
            <section>
                <form onSubmit={this.submitHandler}>
                    <label>Imię</label>
                    <input
                        onChange={e => this.setState({ name: e.target.value })}
                        value={this.state.name}
                        type="text"
                        required />
                    <label>Email</label>
                    <input
                        onChange={e => this.setState({ email: e.target.value })}
                        value={this.state.email}
                        type="email"
                        required />
                    <label>Hasło</label>
                    <input
                        onChange={e => this.setState({ password: e.target.value })}
                        value={this.state.password}
                        type="password"
                        required/>
                    <label>Powtórz hasło</label>
                    <input
                        onChange={e => this.setState({ confirmedPassword: e.target.value })}
                        value={this.state.confirmedPassword}
                        type="password"
                        required />
                    <button>zarejestruj się</button>
                </form>
                { alert }       
            </section>
        )
    }
}

export default Register;