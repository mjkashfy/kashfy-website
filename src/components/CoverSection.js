import React from 'react';
import '../App.css';
import { Button } from './Button';
import './CoverSection.css';

function CoverSection() {
  return (
    <div className='cover-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted playsInline/>
      <h1>Miftahul Kashfy</h1>
      {/* <p>Welcome to my corner of the web! 
        I'm Kashfy, a passionate computer science graduate 
        with a knack for creativity and problem-solving. 
        Explore my journey through technology and more. 
        Let's connect  and discover together!</p> */}
        <p>Welcome to my corner of the web! 
          I'm Kashfy, a computer science graduate with a passion 
          for creativity and technology. Beyond tech, 
          I have experience in sales, social media management, 
          event planning, customer service etc., allowing me to connect with 
          diverse audiences. Explore my journey and let's connect 
          on this website I built from scratch!
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
