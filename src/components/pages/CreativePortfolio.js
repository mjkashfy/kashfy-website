import React from 'react';
import '../../App.css';
import './CreativePortfolio.css';

function CreativePortfolio() {
  return (
    <div className="creative-portfolio-container">
      <div className="flower-container">
        <img src="/images/flower-right.png" alt="Flower Left" className="flower-left" />
        <img src="/images/flower-right.png" alt="Flower Right" className="flower-right" />
      </div>

      <div className="butterfly-container">
        <img src="/images/butterfly.png" alt="Butterfly" className="butterfly" />
      </div>

      <div className="content-container">
        <h1>My Creative Portfolio</h1>
        <p>Explore my creative work, art, and animation projects! tiny change to check if github is connected</p>
        {/* Add your creative portfolio content here */}
      </div>
    </div>
  );
}

export default CreativePortfolio;
