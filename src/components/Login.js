import React, { Component } from 'react';
import axios from 'axios';
import Config from './../Configuration/Config';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    submitHandler = async (event) => {
        event.preventDefault();
        const config = new Config();
        const response = await
            axios.post(`${config.apiPath}/login`, {
                params: {
                    password: this.state.password,
                    email: this.state.email
                }
            });
            console.log(response);
    };

    // submitHandler = (event) => {
    //     event.preventDefault();

    //         axios.post('https://localhost:8000/api/login', {
    //             login: this.state.login,
    //             email: this.state.email
    //         })
    //         .then(response => {
    //             console.log(response.data);
    //         })            
    // };


    render() {
        return (
            <section>
                <h1>Zaloguj się</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Login</label>
                    <input
                        type="email"
                        value={this.state.email} 
                        onChange={e => this.setState({ email: e.target.value })}
                        required
                    />
                    <label>Hasło</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        required
                    />
                    <button>zaloguj się</button>
                </form>
            </section>
        );
    }
}

export default Login;