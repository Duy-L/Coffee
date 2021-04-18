import React from 'react';
import TodoListContainer from './todo_list/todo_list_container.js';
import Spotify from './spotify/spotify.js';
import SpotifyPlaylist from './spotify/playlist.js';
import Audio from './audio/audio.js';
import expresso from './audio/assets/sounds/expresso_machine.mp3';

const App = () => (
    <div>
        <h1>Work in Progress...</h1>
        <TodoListContainer/>
        <Spotify/>
        <SpotifyPlaylist/>
        <h1>From audio</h1>
        <Audio file={expresso}/>
        <Audio file={expresso}/>
        <Audio file={expresso}/>
    </div>
)

export default App;