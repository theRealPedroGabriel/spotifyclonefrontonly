import React from "react";

import "react-h5-audio-player/lib/styles.css";
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";
import { ProgressBar } from "react-bootstrap";
import "./player.css";

function MusicPlayer() {
  const audioPlayerRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration);
  };

  const handlePrevious = () => {
    // Implement your logic for playing previous song
  };

  const handleNext = () => {
    // Implement your logic for playing next song
  };

  return (
    <div className="music-player">
      <div className="music-player-info">
        
       
      </div>

      <ProgressBar
        now={currentTime}
        max={duration}
        label={`${Math.floor(currentTime)}s`}
      />

      <div className="music-player-controls">
        <button onClick={handlePrevious}>
          <FiSkipBack />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>

        <button onClick={handleNext}>
          <FiSkipForward />
        </button> <h3>Song Title</h3>
      </div>

     
    </div>
  );
}

export default MusicPlayer;
