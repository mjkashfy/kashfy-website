import React from 'react';
import '../../App.css';
import './Portfolio.css'; // Import your custom CSS for styling

function Portfolio() {
  return (
    <div className='entire-page'>
    <div className='portfolio-container'>
        <section className='message'>
        <p>
          Hey there! my website is still under development but it is fun to just put it out there.
          <br />I'm actively updating my webpage, but coding from scratch takes times. please feel free to look around 🤗
        </p>
        </section>

      <section className='intro'>
        <h1>Portfolio</h1>
        <p>This is where you'll find detailed description of my education 
          and a comprehensive showcase 
          of my work experiences, skills, and projects 
          I've passionately contributed to.</p>
      </section>


      <section className='section1'>
        <h2>Education</h2>
        <div className='education-item'>
          <img src='/images/dal-campus.jpg' alt='University Logo' className='university-logo' />
          <div className='education-description'>
            <h3>Dalhousie University</h3>
            <h4>Bachelor of Applied Computer Science - Coop</h4>
            <h4>Sept 2019 - May 2024</h4>
            <p>
              I completed my Bachelor's degree in Applied Computer Science, which gave me a great 
              blend of technical and management skills. During my degree, I also gained hands-on 
              experience through co-op opportunities. I consistently maintained high academic performance, 
              often being recognized on the Dean's List and as a Sexton Scholar across several terms.<br />
              
              Cummulative GPA: 3.65<br />
            </p> 
            <h4>Courses including but not limited to:</h4>
            <p>Tech: Web Development & Design, Database Systems, Software Development, Data 
              Structures & Algorithms, Human-Computer Interaction etc.</p>
            <p>Mgmt: Innovation, Starting Lean, Principles of Work & Organizational 
              Behavior, Public Policy etc.
            </p>
            <p>Other: Photojournalism, Statistics, Music</p>
          </div>
        </div>
      </section>


      <section className='section1'>
        <h2>Work Experience</h2>
        <p>scroll to work experiences explore more →</p>
        <div className='scroll-container'>
          <div className='work-item'>
            <h4>Application <br />Developer</h4>
            <p>
              Jan – Apr 2023 (4 months)<br />
              Stream Financial Inc., Halifax, NS</p>
            <img src='/images/stream.png' alt='Work 1' />
            <p>
              At Stream Financial Inc., I completed my third co-op, 
              where I developed and implemented key services for 
              stakeholders, automated Excel revenue accounts, and presented 
              cloud-based solutions to senior management, resulting in improved 
              productivity and cost savings.</p>

              <h5> Skills involved not limited to:<br /> research, communication, collaboration, automation, 
                zapier, collaboration, problem-solving
              </h5>
          </div>

          <div className='work-item'>
            <h4>Student <br />Analyst</h4>
            <p>
            Jan – Aug 2022 (8 months)<br />
            Nova Scotia Health Authority, Halifax, NS</p>
            <img src='/images/nsha.png' alt='Work 2' />
            <p>
            During my first and second co-op, I spent 8 months developing 24/7 
            patient appointment chatbots and an employee appointment detection system, 
            which significantly reduced "no-show" rates. I also scripted medical 
            workflows using STAR scripting and automated processes to optimize 
            company applications. Additionally, I created training modules and 
            documentation to ensure a smooth transition for future co-op students and 
            seamless chatbot adoption after my term.</p>

            <h5> Skills involved not limited to:<br /> communication, collaboration, automation, 
                ms power automate, power virtual agents, star scripting,
                problem-solving
              </h5>
          </div>
          
          <div className='work-item'>
            <h4>Resident <br />Assistant</h4>
            <p>
            Jan – Aug 2022 (3 years)<br />
            Residence Life, Dalhousie, Halifax, NS</p>
            <img src='/images/res-howe.png' alt='Work 3' />
            <p> I spent three years as a Resident Assistant, which was a significant part of my 
              university experience. I managed event budgeting and reports while creating and 
              facilitating events tailored to student interests, enhancing engagement and community. 
              Collaborating with RLMs and Dal Security, addressed 
              safety concerns. This role gave me valuable experience in leadership, event planning, 
              and problem-solving while interacting with a diverse student population.
            </p>
            <h5> Skills involved not limited to:<br /> communication, collboration, administrative, 
                active listening, customer service, event planning, budgeting,
                 time managemnent, leadership, problem-solving
              </h5>
          </div>

          <div className='work-item'>
            <h4>Telus Sales <br />Representative</h4>
            <p>
            Aug – Sept 2022 (1 month)<br />
            Ooros Limited, Halifax, NS</p>
            <img src='/images/telus.png' alt='Work 4' />
            <p> At Ooros Limited, I worked in sales, engaging with diverse clients to address 
              their needs and provide tailored solutions. I developed negotiation, objection 
              handling and conflict resolution skills while consistently meeting sales targets. 
              I also participated in team meetings to discuss strategies for maximizing sales 
              and enhancing customer experiences in a fast-paced, results-driven environment.
            </p>
            <h5> Skills involved not limited to:<br /> communication, active listening, customer service, decision making,
            problem-solving
            </h5>
          </div>   

          <div className='work-item'>
            <h4>AI Content <br />Evaluator</h4>
            <p>
            Jun 2024 –  Present<br />
            Outlier, (Remote)</p>
            <img src='/images/outlier.png' alt='Work 5' />
            <p>
            As a freelance AI Writing Evaluator at Outlier, I focus on conversation rewriting 
            to remove personally identifiable information (PII) from user-AI chatbot interactions 
            while maintaining integrity. I apply my knowledge of identifiers to replace sensitive 
            information and ensure compliance with privacy regulations. I assess 
            AI-generated writing for factual accuracy, clarity, and grammatical precision, 
            upholding high standards in all evaluations.
            </p>
            <h5> Skills involved not limited to:<br /> persistence, time management, attention to detail
            </h5>
          </div>    

          <div className='work-item'>
            <h4>Undergraduate <br />Representative BACS</h4>
            <p>
            May 2021 – Apr 2022 (1 year) <br />
            Comp Sci Society, Dalhousie, Halifax NS</p>
            <img src='/images/cs-society.png' alt='Work 6' />
            <p>
            As the Undergraduate Representative for the CS Society at Dalhousie University, I 
            coordinated with students, faculty, and staff to select course representatives and 
            manage communications. I represented undergraduate students in the Computer Science 
            department, addressing concerns and organizing events to enhance student life. 
            Collaborating closely with peers, I ensured clear communication between students 
            and the department, effectively handling challenges that arose during my term.
            </p>
            <h5> Skills involved not limited to:<br /> communication, administrative, time management, problem-solving
            </h5>
          </div>

          <div className='work-item'>
            <h4>Private <br />Tutor</h4>
            <p>
            Jan – Aug 2021 (8 months) <br />
            Self-Employed</p>
            <img src='/images/private-tutor.jpg' alt='Work 7' />
            <p>
            I provided guidance to Grade 9 and 10 students through in-person lectures, helping them 
            understand academic content and analytical concepts. My support aimed to enhance their 
            preparation for international board exams and ensure their academic success.
            </p>
            <h5> Skills involved not limited to:<br /> communication, time management, mentoring
            </h5>
          </div>

          <div className='work-item'>
            <h4>Social Media<br /> Content Manager</h4>
            <p>
            Sep 2020 – Oct 2021 (1 year 1 month) <br />
            Ara Noor Closet (Remote)</p>
            <img src='/images/socialcontent.png' alt='Work 8' />
            <p>
            As a Social Media Content Creator for Ara Noor Closet, I managed and monitored social 
            media platforms, producing content such as videos, photography, and graphics for Facebook 
            and TikTok. I generated analytic reports to track growth and engagement while directly 
            communicating with customers to provide timely responses and enhance satisfaction.
            </p>
            <h5> Skills involved not limited to:<br /> communication, customer engagement, content creation, 
            platforms: facebook, tiktok, instagram
            </h5>
          </div>

        </div>
      </section>

      <section className='section1'>
        <h2>Projects</h2>
        <p>scroll over projects to explore more →</p>
        <div className='scroll-container'>
          
          <div className='project-item'>
          <h4>ARAD</h4>
            <p>
            time place <br />
            languagues:<br />
            Role:<br />
            </p>
            <p>
            Description here
            </p>
          </div>

          <div className='project-item'>
          <h4>Zoom clone</h4>
            <p>
            time place <br />
            languagues:<br />
            Role:<br />
            </p>
            <p>
            Description here
            </p>
          </div>

          <div className='project-item'>
          <h4>psych database</h4>
            <p>
            time place <br />
            languagues:<br />
            Role:<br />
            </p>
            <p>
            Description here
            </p>
          </div>

          <div className='project-item'>
          <h4>the book databse </h4>
            <p>
            time place <br />
            languagues:<br />
            Role:<br />
            </p>
            <p>
            Description here
            </p>
          </div>

          <div className='project-item'>
          <h4>look through assignments to find projects</h4>
            <p>
            time place <br />
            languagues:<br />
            Role:<br />
            </p>
            <p>
            As a Social .
            </p>
          </div>

          
        </div>
      </section>
      <section className='section1'>
        <h2>Skills</h2>

        <h4>Technical:</h4>
        <div className="skills-grid">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React JS</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">PHP</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">Scrum</div>
          <div className="skill-item">Agile Methodologies</div>
          <div className="skill-item">MS Power Automate</div>
          <div className="skill-item">MS Power Virtual Agents</div>
          <div className="skill-item">Figma</div>
          <div className="skill-item">Canva</div>
          <div className="skill-item">STAR Scripting</div>
          <div className="skill-item">MS Office 365</div>
          <div className="skill-item">MS Excel</div>
          <div className="skill-item">MS Word</div>
          <div className="skill-item">Google Suite</div>
        </div>

        <h4>Soft:</h4>
        <div className="skills-grid">
          <div className="skill-item">Communication - verbal and written</div>
          <div className="skill-item">Teamwork</div>
          <div className="skill-item">Problem-solving</div>
          <div className="skill-item">Adaptability</div>
          <div className="skill-item">Time management</div>
          <div className="skill-item">Critical thinking</div>
          <div className="skill-item">Emotional intelligence</div>
          <div className="skill-item">Conflict resolution</div>
          <div className="skill-item">Creativity</div>
          <div className="skill-item">Interpersonal skills</div>
          <div className="skill-item">Work ethic</div>
          <div className="skill-item">Positive attitude</div>
          <div className="skill-item">Empathy</div>
          <div className="skill-item">Collaboration</div>
          <div className="skill-item">Active listening</div>
          <div className="skill-item">Flexibility</div>
          <div className="skill-item">Event Planning</div>
          <div className="skill-item">Customer Service</div>
        </div>
        
      </section>


  
    </div>
    </div>
  );
}

export default Portfolio;
