import React from 'react';
import './TutorialPage.css';

const TutorialPage = () => {
  return (
    <div className="tutorial-page">
      <h1>How to Use Our Tool</h1>
      <div className="video-grid">
        <div className="video-container">
          <h2>Getting Started</h2>
          <iframe
            src="https://www.youtube.com/embed/G3Br21WSvtQ"
            title="Getting Started"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>Introducing AutoPyNet</h2>
          <iframe
            src="https://www.youtube.com/embed/npVRDGP9XCc"
            title="Introducing AutoPyNet"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>AutoPyNet Overview</h2>
          <iframe
            src="https://www.youtube.com/embed/3Nv4OStiBec"
            title="AutoPyNet Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>Lab Overview</h2>
          <iframe
            src="https://www.youtube.com/embed/CAtrSzpPW-A"
            title="Lab Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;