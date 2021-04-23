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

const App = () => (
    <div className="main">
        <Header/>
        <Container fluid className={"no-gutters mx-0 px-0"}>
            <Row noGutters={true}>
                <Col xs={"3"}>
                    <h1>Work in Progress...</h1>
                    <TodoListContainer/>
                    <Spotify/>
                    <SpotifyPlaylist/>
                </Col>
                <Col xs={"7"}>
                    <p>heheheh</p>
                </Col>
                <Col xs={"2"}>
                    <Audio file={preparing} name={"Preparing Drinks"}/>
                    <Audio file={cup} name={"Coffee Cups"}/>
                    <Audio file={friend} name={"Plus one"}/>
                    <Audio file={expresso} name={"Machinery"}/>
                    <Audio file={rainy} name={"Rainy Day"}/>
                    <Audio file={busy} name={"Sunny Day"}/>
                    <Audio file={patio} name={"Outside Patio"}/>
                </Col>
            </Row>
        </Container>
        
        
    </div>
)

export default App;