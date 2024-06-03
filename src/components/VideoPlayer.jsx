import React from 'react';

import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <ReactPlayer
      controls
      light="/vp-poster.avif"
      url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      className="shadow-lg"
    />
  )
}

export default VideoPlayer