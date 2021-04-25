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
        this.audio.current.volume=".75";
    }

    render(){
        return (
            <div>
                <div class="d-inline-flex p-2 flex-nowrap">
                    <audio id="mp3" ref={this.audio} >
                        <source src={this.props.file} type="audio/mp3"/>
                    </audio>
                    {this.state.currState === 0 &&(
                        <div>
                            <span>{this.props.name} </span>
                            <button id="play-icon" onClick={this.playSound}>
                                <FontAwesomeIcon icon={faPlay} size="xs" fixedWidth/>
                            </button>
                        </div>
                    )}
                    {this.state.currState === 1 &&(
                        <div>
                            <span>{this.props.name} </span>
                            <button id="play-icon" onClick={this.pauseSound}>
                                <FontAwesomeIcon icon={faPause} size="xs" fixedWidth/>
                            </button>
                        </div>
                    )}
                </div>
                <div class="d-flex p-2">
                    <FontAwesomeIcon icon={faVolumeUp} size="md" fixedWidth/>
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


