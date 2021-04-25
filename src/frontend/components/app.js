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

const App = () => (
    <div className="main">
        <Header/>
        <br/>
        <br/>
        <br/>
        <Container fluid className={"no-gutters mx-0 px-0"}>
            <Row noGutters={true}>
                <Col>
                    <div id="first_col" class="d-flex align-items-start flex-column">
                        <div class="d-flex p-2 flex-column">
                            <h3 class="h33">Work in Progress...</h3>
                            <TodoListContainer/>
                            <Spotify/>
                        </div>
                        <div class="mt-auto d-flex p-2">
                            <div id="spott" class="d-flex p-2 flex-column">
                                <p id="quote">Take a seat and stay awhile.</p>
                                <SpotifyPlaylist/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div class="d-flex p-2 flexwrap">
                        <img src={placeholder} class="images"></img>
                    </div>
                </Col>
                <Col>
                    <div id="first_col" class="d-flex flex-column">
                        <Audio file={preparing} name={"Preparing Drinks"}/>
                        <Audio file={cup} name={"Coffee Cups"}/>
                        <Audio file={friend} name={"Plus one"}/>
                        <Audio file={expresso} name={"Machinery"}/>
                        <Audio file={rainy} name={"Rainy Day"}/>
                        <Audio file={busy} name={"Sunny Day"}/>
                        <Audio file={patio} name={"Outside Patio"}/>
                    </div>   
                </Col>
            </Row>
            {/* <Row noGutters={true}>
                <Col sm={4} md={4}>
                    <div id="spott" class="d-flex p-2 flex-column">
                        <SpotifyPlaylist/>
                    </div>
                </Col> */}
                {/* <Col>
                    <p>5</p>
                </Col>
                <Col sm={3}>
                    
                </Col>      */}
            {/* </Row> */}
            {/* <Row noGutters={true}>
                <Col>
                    <p>7</p>
                </Col>
                <Col>
                    <p>8</p>
                </Col>
                    <p>9</p>
            </Row> */}
            
        </Container>

        
    </div>
)

export default App;