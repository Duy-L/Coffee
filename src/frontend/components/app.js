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
import Header from './header/header.js';
import './app_assets/app_assets.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import placeholder from './app_assets/placeholder.jpg'
import Footer from './footer/footer.js';
import Image from 'react-bootstrap/Image'
const App = () => (
    <div id="cloud-container">
        <Header/>
        <Container fluid className={"no-gutters mx-0 px-0"}>
            <Row noGutters={true}>
                <Col xs={{order: 'first'}}>
                    <div id="first_col" class="d-flex align-items-start flex-column">
                        <div class="d-flex p-2 flex-column">
                            <h3 class="h33">Work in Progress...</h3>
                            <TodoListContainer/>
                            <Spotify/>
                        </div>
                        <div class="mt-auto d-flex p-2">
                            <div id="spott" class="d-flex p-2 flex-column">

                                <p id="quote">This Week's Playlist</p>
                                <SpotifyPlaylist/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={8} md={6}>
                    <div class="d-flex p-2">
                        {/* <img src={placeholder} class="images"></img> */}
                        <img 
                            src="http://www.joerperez.com/wordpress/wp-content/uploads/2015/09/808s_POSTER_4.jpg" 
                            class="images">
                        </img>
                    </div>
                </Col>
                <Col xs={{order: 'last'}}>
                    <div id="last_col" class="d-flex p-2">
                        <div class="d-flex p-2 flex-column">
                            <Audio file={preparing} name={"Preparing Drinks"}/>
                            <Audio file={cup} name={"Coffee Cups"}/>
                            <Audio file={friend} name={"Plus one"}/>
                            <Audio file={expresso} name={"Machinery"}/>
                            <Audio file={rainy} name={"Rainy Day"}/>
                            <Audio file={busy} name={"Sunny Day"}/>
                            <Audio file={patio} name={"Outside Patio"}/>
                        </div>
                    </div>   
                </Col>
            </Row>
        </Container>
        <Footer/>  
    </div>
)

export default App;