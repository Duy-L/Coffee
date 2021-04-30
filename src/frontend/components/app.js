import React, { useState, useEffect } from 'react';
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
import Header from './header/header.js';
import './app_assets/app_assets.css';
import placeholder from './app_assets/placeholder.jpg'
import Footer from './footer/footer.js';
import Image from 'react-bootstrap/Image';
import Loader from './loader.js';

const App = () => {
    const [spinner, setSpinner] = useState(false);
    const loader = document.getElementsByClassName("loader")[0];
    useEffect(()=> {
        setTimeout(()=> setSpinner(true), 2500);
    }, []);
    return(
        <div>
            <Loader/>
            {spinner && (loader.style.display = 'none') && (
                <div class="grid-container">
                    <div class="header">
                        <Header/>
                    </div>
                    <div class="first_col1">
                        <h3 class="h33">Work in Progress...</h3>
                        <TodoListContainer/>
                        {/* <Spotify/> */}
                    </div>
                    <div class="first_col2">
                        <p id="quote">This Week's Playlist</p>
                        <SpotifyPlaylist/>
                    </div>
                    <div class="last_col">
                            <Audio file={preparing} name={"Preparing Drinks"}/>
                            <Audio file={cup} name={"Coffee Cups"}/>
                            <Audio file={friend} name={"Plus one"}/>
                            <Audio file={expresso} name={"Machinery"}/>
                            <Audio file={rainy} name={"Rainy Day"}/>
                            <Audio file={busy} name={"Sunny Day"}/>
                            <Audio file={patio} name={"Outside Patio"}/>
                    </div>
                    <div class="footer">
                        <Footer/>
                    </div>
                    <div class="mid_col">
                        <div class="image_div">
                            <img 
                                src="http://www.joerperez.com/wordpress/wp-content/uploads/2015/09/808s_POSTER_4.jpg" 
                                class="images"
                            >
                            </img>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
    
}

export default App;