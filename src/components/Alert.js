import React, { Component } from 'react';

class Alert extends React.Component {

    render() {
        return (
            <section>
                <p>{this.props.message}</p>
            </section>
        )
    }
}

export default Alert;