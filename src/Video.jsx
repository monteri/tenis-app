import React from 'react';
import ReactPlayer from 'react-player';
import movement from './gallery/movement.mp4'

function VideoPlayer() {
  return (
    <ReactPlayer
      url={movement}
      width="auto"
      height="350"
      controls
    />
  );
}

export default VideoPlayer;