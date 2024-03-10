import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineSketch,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlineSketch /> Narotham Reddy
                </Col>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlinePhone /> +91 7799427942
                </Col>
                <Col md="3" className="footer text-white fw-bold">
                    <AiOutlineMail /> narothamreddy.narot@gmail.com
                </Col>
                <Col md="3" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/NarotGit"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/narotlink/"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/Narotian"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillTwitterCircle />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
