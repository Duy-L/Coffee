import SpotifyPlayer from 'react-spotify-player';
import React, { Component } from 'react';

class SpotifyPlaylist extends Component{
    render(){
        //spotify playlist
    const size = {
        width: '260px',
        height: '320px',
    };
    const view = 'coverart'; // or 'coverart'
    const theme = 'black'; // or 'white'
        return (
            <SpotifyPlayer
                uri="spotify:playlist:7DwVLvkVLCdaGooIZmTcxr"
                size={size}
                view={view}
                theme={theme}
            />
        )
    }
}

export default SpotifyPlaylist;