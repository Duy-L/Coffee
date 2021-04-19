import React from 'react';
import TodoListContainer from './todo_list/todo_list_container.js';
import Spotify from './spotify/spotify.js';
import SpotifyPlaylist from './spotify/playlist.js';
import Audio from './audio/audio.js';
import expresso from './audio/assets/sounds/expresso_machine.mp3';
import preparing from './audio/assets/sounds/preparing_drinks.mp3';
import busy from './audio/assets/sounds/busy_night.mp3';
import cup from './audio/assets/sounds/coffee_cups.mp3';
import rainy from './audio/assets/sounds/rainy_day.mp3';
import friend from './audio/assets/sounds/plus_one.mp3';
import patio from './audio/assets/sounds/patio_day.mp3';

const App = () => (
    <div>
        <h1>Work in Progress...</h1>
        <TodoListContainer/>
        <Spotify/>
        <SpotifyPlaylist/>
        <h1>From audio</h1>
        <h4>Preparing Drinks
            <Audio file={preparing}/>
       </h4>
       <h4>Coffee Cups
           <Audio file={cup} />
       </h4>
       <h4>Plus One
           <Audio file={friend} />
       </h4>
        <h4>Machinery
            <Audio file={expresso}/>
        </h4>
        <h4>Rainy Day
            <Audio file={rainy}/>
        </h4>
        <h4>Sunny Day
            <Audio file={busy}/>
        </h4>
        <h4>Outside Patio
            <Audio file={patio}/>
        </h4>
    </div>
)

export default App;