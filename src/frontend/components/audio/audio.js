import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './assets/audio.css';
import 'bootstrap/dist/css/bootstrap.css';
class Audio extends Component{
    constructor (props){
        super();
        this.state = {
            currState: 0
        }
        this.audio = React.createRef();
        this.setVolume = this.setVolume.bind(this);
        this.playSound = this.playSound.bind(this);
        this.pauseSound = this.pauseSound.bind(this);    
    }

    setVolume(myVolume){
        this.audio.current.volume = myVolume / 100;
    }

    playSound(){
        this.audio.current.play();
        this.audio.current.loop = true;
        this.setState({currState: 1});
    }
    pauseSound(){
        this.audio.current.pause();
        this.setState({currState: 0});
    }

    componentDidMount(){
        this.audio.current.load();
        this.audio.current.volume=".75";
    }
    render(){
        return (
            <div class="audio_div">
                <div class="d-flex p-2">
                    <div>
                        <audio ref={this.audio} preload="none">
                            <source src={this.props.file} type="audio/mp4" type="audio/mp3"/>
                        </audio>
                        {this.state.currState === 0 &&(
                            <div>
                                <span id="audio_name">{this.props.name} </span>
                                <button id="play-icon" onClick={this.playSound}>
                                    <FontAwesomeIcon icon={faPlay} size="xs" fixedWidth/>
                                </button>
                            </div>
                        )}
                        {this.state.currState === 1 &&(
                            <div>
                                <span id="audio_name">{this.props.name} </span>
                                <button id="play-icon" onClick={this.pauseSound}>
                                    <FontAwesomeIcon icon={faPause} size="xs" fixedWidth/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div class="d-flex p-2">
                    <span id="volume-icon">
                        <FontAwesomeIcon id="volume-icon" icon={faVolumeUp} size="md" fixedWidth/>
                    </span>
                    <input id ="volume"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        onChange={event => {
                        this.setVolume(event.target.valueAsNumber)
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Audio;


