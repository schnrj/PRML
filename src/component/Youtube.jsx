import React from 'react';
import './Youtube.css'; // Assuming you have a CSS file for styling

function Youtube() {
  return (
    <div className="youtube-container">
      <h2 className="youtube-header">Video Explanation</h2>
      <div className="youtube-video-wrapper">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/8PTOkwze0Vw?si=iwI9et2P1e6LlMTb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
