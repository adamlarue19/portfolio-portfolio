import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // creating scroll animation for the navbar to be transparent until scrolled 50 pixels
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seeScrolled(true);
            } else {
                seeScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };


    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#link"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#link"className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;