import "./video.css"
import React, { useState, useEffect } from 'react';
import Videos from "../assets/vid.mp4";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = React.createRef();

  useEffect(() => {
    const video = videoRef.current;
    video.src = Videos;

    video.addEventListener('play', () => {
      setPlaying(true);
    });

    video.addEventListener('pause', () => {
      setPlaying(false);
    });
  }, []);

  const handlePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="video">
      <video ref={videoRef} width="100%" height="100%" controls className="media"/>
    </div>
  );
};

export default VideoPlayer;