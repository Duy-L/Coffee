import React from 'react';
import TodoListContainer from './todo_list/todo_list_container.js';
import Spotify from './spotify/spotify.js'

const App = () => (
    <div>
        <h1>from app</h1>
        <TodoListContainer/>
        <Spotify/>
    </div>
)

export default App;