import React from 'react';
import '../../App.css';
import './Portfolio.css'; // Import your custom CSS for styling

function Portfolio() {
  return (
    
    <div className='portfolio-container'>
        <section className='message'>
        <p>
          Hey there! my website is still under development but it is fun to just put it out there.
          I'm actively updating my webpage, please feel free to look around 🤗
        </p>
        </section>
      <section className='section'>
        
        <h1>Portfolio</h1>
        <p>This is where you'll find detailed description of my education 
          and a comprehensive showcase 
          of my work experiences, skills, and projects 
          I've passionately contributed to.</p>
      </section>


      <section className='section1'>
        <h2>Education</h2>
        <div className='education-item'>
          <img src='/images/dal.jpg' alt='University Logo' className='university-logo' />
          <div className='education-description'>
            <h3>Dalhousie University</h3>
            <h4>Bachelor of Applied Computer Science - Coop</h4>
            <p>
              Start: September, 2019<br />
              Graduation 🎓: May, 2024<br />
              Cummulative GPA: 3.65<br />
            </p> 
            <h4>Courses including but not limited to:</h4>
            <p>Tech: Web Development & Design, Database Systems, Software Development, Data 
              Structures & Algorithms, Human-Computer Interaction etc.</p>
            <p>Mgmt: Innovation, Starting Lean, Principles of Work & Organizational 
              Behavior, Public Policy etc.
            </p>
            <p>Other: Photojournalism</p>
          </div>
        </div>
      </section>


      <section className='section1'>
        <h2>Work Experience</h2>
        <div className='scroll-container'>
          <div className='work-item'>
            <h4>Application Developer</h4>
            <img src='/images/stream.png' alt='Work 1' />
            <p className='work-description'>
              Date:<br />
              Location:<br />
              Description of Work 1</p>
          </div>
          <div className='work-item'>
            <p>Student Analyst</p>
            <img src='/images/nsha.png' alt='Work 2' />
          </div>
          <div className='work-item'>
            <p>Resident Assistant</p>
            <img src='/images/res-howe.png' alt='Work 3' />
          </div>          
          <div className='work-item'>
            <p>Telus Sales Representative</p>
            <img src='/images/telus.png' alt='Work 4' />
          </div>          
          <div className='work-item'>
            <p>AI Content Rewriter</p>
            <img src='/images/outlier.png' alt='Work 5' />
          </div>          
          <div className='work-item'>
            <p>Undergraduate Representative</p>
            <img src='/images/cs-society.png' alt='Work 6' />
          </div>
          
          {/* Add more work items as needed */}
        </div>
      </section>

      <section className='section1'>
        <h2>Projects</h2>
        <div className='scroll-container'>
          <div className='project-item'>


            <img src='/images/img-3.jpg' alt='Project 1' />
            <p>Description of Project 1</p>
          </div>
          <div className='project-item'>
            <img src='/images/img-3.jpg' alt='Project 2' />
            <p>Description of Project 2</p>
          </div>
          <div className='project-item'>
            <img src='/images/img-3.jpg' alt='Project 3' />
            <p>Description of Project 3</p>
          </div>
          <div className='project-item'>
            <img src='/images/img-3.jpg' alt='Project 4' />
            <p>Description of Project 4</p>
          </div>
          <div className='project-item'>
            <p>Description of Project 5</p>
            <img src='/images/img-4.jpg' alt='Project 5' />
          </div>
          {/* Add more project items as needed */}
        </div>
      </section>
      <section className='section1'>
        <h2>Skills</h2>
        <div className='education-item'>
            <p>Skill 1</p>
        </div>
        <div className='education-item'>
            <p>Skill 2</p>
        </div>
        <div className='education-item'>
            <p>Skill 3</p>
        </div>
        <div className='education-item'>
            <p>Skill 4</p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
