import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <p>
          Hey there! my website is still under development - some pages are not completed yet.
          I'm actively updating my webpage, but coding from scratch takes times. Please feel free to look around 🤗
        </p>

      <h1>Check out these sections below!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/companies.jpg'
              text='Explore my work experiences, projects and more'
              label='Portfolio'
              path='/portfolio'
            />
            <CardItem
              src='images/about-me.jpg'
              text='Get to know me better!'
              label='About Me'
              path='/aboutMe'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/awards.jpg'
              text='Achievements Unlocked Here!'
              label='Certificates and Awards'
              path='/aboutMe'
            />
            <CardItem
              src='images/blog.png'
              text="What's been up recently.."
              label='Blogs and Thoughts'
              path='/aboutMe'
            />
            <CardItem
              src='images/img-plag.png'
              text='Credits for everything I used to build this website'
              label='Credits'
              path='/aboutMe'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
