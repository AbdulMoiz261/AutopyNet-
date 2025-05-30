import React from 'react';
import './download.css';
// import logo from '../Image/logo.png';
// import windowsIcon from '../Image/windows.png';
// import macIcon from '../Image/mac.png';
// import linuxIcon from '../Image/linux.png';

export default function Download() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/AutoPyNet Tool.exe';
    link.download = 'AutoPyNet Tool.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="download-section">
      
      {/* Banner Section */}
      <div className="download-banner">
        <div className="banner-content">
          {/* Original Content */}
          <h2>"Download our tool by simply clicking the button"</h2>
          <button onClick={handleDownload} className="banner-download-button">Download</button>
          <h2>"Download our tool by simply clicking the button"</h2>
          <button onClick={handleDownload} className="banner-download-button">Download</button>

          {/* Duplicated Content */}
          <h2>"Download our tool by simply clicking the button"</h2>
          <button onClick={handleDownload} className="banner-download-button">Download</button>
          <h2>"Download our tool by simply clicking the button"</h2>
          <button onClick={handleDownload} className="banner-download-button">Download</button>
        </div>
      </div>
      
      {/* Main Download Box */}
      <div className="download-box">
        <img src="/Image/logoicon.png" alt="Product Logo" className="product-logo" />
        <h1>AutoPy Net 2024</h1>
        <p>Experience seamless network automation with AutoPyNet. Our powerful tool simplifies network management, configuration, and monitoring tasks with an intuitive interface and robust features.</p>
        
        {/* Platform Icons */}
        {/* <div className="platform-icons">
          <img src={windowsIcon} alt="Windows" />
          <img src={macIcon} alt="Mac" />
          <img src={linuxIcon} alt="Linux" />
        </div> */}
        
        {/* Download Button */}
        <button onClick={handleDownload} className="download-button1">Download</button>
      </div>
    </div>
  );
}
