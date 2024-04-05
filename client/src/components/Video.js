import React from 'react'
import bgVideo from '../assets/qv2.mp4'
const Video = () => {
  return (
    <div className="-z-1 fixed top-0 left-0 right-0 bottom-0">
      <video autoPlay muted preload='auto' loop>
        <source src={bgVideo} type="video/mp4" />
        No Video
      </video>
    </div>
  )
}

export default Video
