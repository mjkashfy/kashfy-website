import React from 'react';
import '../../App.css';
import './Portfolio.css'; // Import your custom CSS for styling

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <section className='section'>
        <h1>Portfolio</h1>
        <p>This is where you'll find a comprehensive showcase 
          of my work experiences, skills, and projects 
          I've passionately contributed to.</p>
      </section>


      <section className='section1'>
        <h2>Education</h2>
        <div className='education-item'>
          <img src='/images/dal.jpg' alt='University Logo' className='university-logo' />
          <div className='education-description'>
            <h3>Dalhousie University</h3>
            <p>Bachelor of Applied Computer Science<br />
              Graduation 🎓: May, 2024<br />
              Relevant Courses: Web Development, Database Systems, AI, etc.
            </p>
          </div>
        </div>
      </section>


      <section className='section1'>
        <h2>Work Experience</h2>
        <div className='scroll-container'>
          <div className='work-item'>
            <h4>Name of Work 1</h4>
            <img src='/images/awards.jpg' alt='Work 1' />
            <p>
              Date:<br />
              Location:<br />
              Description of Work 1</p>
          </div>
          <div className='work-item'>
            <p>Description of Work 2</p>
            <img src='/images/img-2.jpg' alt='Work 2' />
          </div>
          <div className='work-item'>
            <p>Description of Work 2</p>
            <img src='/images/img-2.jpg' alt='Work 3' />
          </div>          <div className='work-item'>
            <p>Description of Work 2</p>
            <img src='/images/img-2.jpg' alt='Work 4' />
          </div>          <div className='work-item'>
            <p>Description of Work 2</p>
            <img src='/images/img-2.jpg' alt='Work 5' />
          </div>          <div className='work-item'>
            <p>Description of Work 2</p>
            <img src='/images/img-2.jpg' alt='Work 6' />
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
