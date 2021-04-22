import React, { Component } from 'react';
import * as $ from 'jquery';
import Player from './player.js';
import "./assets/spotify.css";
import hash from './hash.js';

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "fc9c4a1983ab48d0a9a16679b3f55f53";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state"
];

class Spotify extends Component {
    constructor(){
        super();
        this.state = {
            token: null,
            item: {
            album: {
                images: [{ url: "" }]
            },
            name: "",
            artists: [{ name: "" }],
            duration_ms: 0
            },
            is_playing: "Paused",
            progress_ms: 0,
            no_data: false,
            show: false,
        };

        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
        this.tick = this.tick.bind(this);
        this.display= this.display.bind(this);
    }

    getCurrentlyPlaying(token) {
        //make a call using the token
        $.ajax({
            url: "https://api.spotify.com/v1/me/player",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {
                if(!data){
                    this.setState({
                        no_data: true,
                    });
                    return;
                }

                this.setState({
                    item: data.item,
                    is_playing: data.is_playing,
                    progress_ms: data.progress_ms,
                    no_data: false
                });
            }
        });
    }

    componentDidMount(){
        //set token
        let _token = hash.access_token;
        if (_token) {
            this.setState({
                token: _token
            });
            this.getCurrentlyPlaying(_token);
        }
        this.interval = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        if(this.state.token){
            this.getCurrentlyPlaying(this.state.token);
        }
    }

    display(){
        console.log("what is going on");
        if(!this.state.show){
            this.setState({show: true});
        }else{
            this.setState({show: false});
        }
    }
    render (){
        return (
        <div>
            <button
                id="button"
                onClick={this.display}
            >+S
            </button>
            {this.state.show && (
                <div className="Spotify">
                <header className="Spotify-header">
                    {!this.state.token && (
                        <a
                            className="btn btn--loginSpotify-link"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                            Login to Spotify
                        </a>
                    )}
                    {this.state.token && !this.state.no_data && (
                        <Player
                            item={this.state.item}
                            is_playing={this.state.is_playing}
                            progress_ms={this.state.progress_ms}
                        />
                    )}
                    {this.state.no_data && (
                        <p>
                            need to play a song for something to appear here
                        </p>
                    )}
                </header>
                </div>)}      
        </div>
        );
    }
}

export default Spotify;