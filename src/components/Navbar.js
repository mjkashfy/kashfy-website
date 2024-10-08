//import { click } from '@testing-library/user-event/dist/click'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
//import logo from '../../public/images/logo.png'; // Adjust the path as per your actual file location


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
      useEffect( () => {
        showButton()
      }, [])

      window.addEventListener('resize', showButton);



  return (
    <div>
      <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          <img src='images/logo.png' alt='KASHFY Logo' className='navbar-logo-img' /> ASHFY
        </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>  
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contactMe' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
            </ul> 
            {button &&<Button buttonStyle='btn--outline'>Contact Me</Button>}     
        </div>
      </nav>
      </>
    </div>
  )
}

export default Navbar
