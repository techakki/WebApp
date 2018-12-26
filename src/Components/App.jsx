import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
    render() {
        return (
            <div>
                <Form />
                <List />
            </div>
        );
    }
};
