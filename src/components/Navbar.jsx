
import { useState, useEffect } from 'react';
import Logo from '../images/logo-mirella.jpg';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';



function Navbarcomp() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,setScrolled]= useState(false);

    useEffect (() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            
                <Navbar.Brand href="#home">
                    <img src={Logo}   alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</NavLink>
                        <NavLink to="/skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</NavLink>
                        <NavLink to="/projects"className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</NavLink>
                    </Nav>
                    <span className='navbar-text'>
                 
                         
                         <SocialIcon url="https://www.linkedin.com/in/mirella-dimichino-823600254"  />
                        
                        <button onClick={() => console.log("Connect")}><span>Lets connect</span></button>
                       
                    </span>
                    
        </Navbar.Collapse>
       
        </Navbar>
    );
}

export default Navbarcomp;