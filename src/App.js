import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'; // Adjust the path if needed
import Download from './components/download';
import Tutorial from './components/tutorial';
import Document from './components/document';
import Footer from './components/footer';
import TutorialPage from './components/TutorialPage'; // Import the TutorialPage component
import DocumentPage from './components/DocumentPage'; // Import the DocumentPage component
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const mainHeading = document.querySelector('.mainheading');
      const manImage = document.querySelector('.man');
      
      if (mainHeading && manImage) {
        const scrollPosition = window.scrollY;
        // Calculate 90% of the man image's position plus its height
        const manPosition = manImage.offsetTop + (manImage.offsetHeight * 0.9) - mainHeading.offsetHeight;
        
        // Only move the text until it reaches 90% down the man image
        if (scrollPosition <= manPosition) {
          const translateY = Math.min(scrollPosition * 0.8, manPosition);
          mainHeading.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav /> {/* Nav is outside Routes to appear on all pages */}

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <div className="mainheading">AutoPyNet</div>
                <div className="man">
                  <img src="/Image/man.png" alt="man" />
                </div>
                <Download />
                <Tutorial />
                <Document />
              </>
            }
          />

          {/* Tutorial Page Route */}
          <Route path="/tutorials" element={<TutorialPage />} />

          {/* Documentation Page Route */}
          <Route path="/documentation" element={<DocumentPage />} />
        </Routes>

        <Footer /> {/* Footer is outside Routes to appear on all pages */}
      </div>
    </Router>
  );
}

export default App;