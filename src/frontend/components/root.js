import React from 'react';
import { Provider } from 'react-redux';
import App from './app.js';
import TodoList from './todo_list/todo_list.js';
import todo_list_container from './todo_list/todo_list_container.js';
const Root = ({ store }) => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;