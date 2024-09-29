import React from 'react';
import '../App.css';
import { Button } from './Button';
import './CoverSection.css';

function CoverSection() {
  return (
    <div className='cover-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Miftahul Kashfy</h1>
      {/* <p>Welcome to my corner of the web! 
        I'm Kashfy, a passionate computer science graduate 
        with a knack for creativity and problem-solving. 
        Explore my journey through technology and more. 
        Let's connect  and discover together!</p> */}
        <p>Welcome to my corner of the web! 
          I'm Kashfy, a passionate computer science graduate 
          with a flair for creativity and a strong 
          foundation in technology. 
          Alongside my tech skills, 
          I have experience in sales, social media management, and 
          customer service, allowing me to connect with diverse audiences 
          and solve a range of challenges. Explore my journey through 
          technology and beyond—let's connect and discover together 
          on a website I built from scratch!
        </p>
        

       <div className='cover-btns'>
       <p>✨scroll below to explore more✨</p>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='https://www.linkedin.com/in/miftahul-kashfy/'
        >
          Quick connect
        </Button>
        
      </div> 
    </div>
  );
}

export default CoverSection;
