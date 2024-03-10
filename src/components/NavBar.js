import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineRead,
    AiOutlineProject,
    AiOutlineCrown,
    AiOutlineLaptop,
    AiOutlineFlag,
    AiOutlineVideoCamera,
    AiOutlineProfile,
} from 'react-icons/ai';
import logo from '../assets/logo.png';

const NavBar = () => {
    const [expand, updateExpand] = useState(false);
    const [navBar, updateNavBar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 25) {
            updateNavBar(true);
        } else {
            updateNavBar(false);
        }
    }

    window.addEventListener('scroll', scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navBar ? 'sticky' : 'navbar'}>
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpand(expand ? false : 'expanded');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpand(false)}>
                                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpand(false)}>
                                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/work" onClick={() => updateExpand(false)}>
                                <AiOutlineFlag style={{ marginBottom: '2px' }} /> Work
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/skill" onClick={() => updateExpand(false)}>
                                <AiOutlineLaptop style={{ marginBottom: '2px' }} /> Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/course" onClick={() => updateExpand(false)}>
                                <AiOutlineVideoCamera style={{ marginBottom: '2px' }} /> Courses
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/education" onClick={() => updateExpand(false)}>
                                <AiOutlineRead style={{ marginBottom: '2px' }} /> Education
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpand(false)}>
                                <AiOutlineProfile style={{ marginBottom: '2px' }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
