
import { useState, useEffect } from 'react';
import Logo from '../images/logo-mirella.jpg';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
                    <img src={Logo} width={200}alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects"className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                       
                        <button onClick={() => console.log("Connect")}><span>Lets connect</span></button>
                       
                    </span>
                    
        </Navbar.Collapse>
       
        </Navbar>
    );
}

export default Navbarcomp;