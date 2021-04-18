import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './assets/audio.css';


class Audio extends Component{
    constructor (props){
        super();
        this.state = {
            currState: 0
        }
        this.setVolume = this.setVolume.bind(this);
        this.playSound = this.playSound.bind(this);
        this.pauseSound = this.pauseSound.bind(this);    
    }

    setVolume(myVolume){
        var myMedia = document.getElementById("mp3");
        myMedia.volume = myVolume;
    }
    playSound(){
        var vid = document.getElementById("mp3");
        vid.play();
        vid.loop = true;
        this.setState({currState: 1});
    }
    pauseSound(){
        var vid = document.getElementById("mp3");
        vid.pause();
        this.setState({currState: 0});
    }

    componentDidMount(){
        // document.getElementById("volume").value =".75";
    }

    render(){
        return (
            <div>
                <audio id="mp3" >
                    <source src={this.props.file} type="audio/mp3"/>
                </audio>
                {this.state.currState === 0 &&(
                     <button id="play-icon" onClick={this.playSound}>
                         <FontAwesomeIcon icon={faPlay}/>
                     </button>
                )}
                {this.state.currState === 1 &&(
                     <button id="play-icon" onClick={this.pauseSound}>
                        <FontAwesomeIcon icon={faPause}/>
                     </button>
                )}
                <input id ="volume"
                    type="range"
                    min={0}
                    max={1}
                    // value={.75}
                    step={0.025}
                    onChange={event => {
                    this.setVolume(event.target.valueAsNumber)
                    }}
                />
                {/* <i>
                    <FontAwesomeIcon icon={faVolumeUp}/>
                </i> */}
            </div>
        )
    }
}

export default Audio;


