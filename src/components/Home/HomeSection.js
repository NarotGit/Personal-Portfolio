import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myAvatar from '../../assets/avatar.png';
import Tilt from 'react-parallax-tilt';
import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineInstagram,
} from 'react-icons/ai';

const HomeSection = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am passionate about Artificial intelligence and everything computer science and
                            technology ...
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> Python, R, SQL and Statistics. </b>
                            </i>
                            <br />
                            <br />
                            My main field of expertise is&nbsp;
                            <i>
                                <b className="purple">Data Science </b> and I am also
                                interested in fields like{' '}
                                <b className="purple">
                                    Artificial intelligence, Space and Nature.
                                </b>
                            </i>
                            <br />
                            <br />I have 3+ years of work experience as{' '}
                            <b className="purple">Data Scientist</b> with
                            <i>
                                <b className="purple"> Python</b>
                            </i>
                            &nbsp; and I am always keen to learn
                            <i>
                                <b className="purple"> new technologies.</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myAvatar} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple"><b>connect</b> </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/NarotGit"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/narotlink/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineLinkedin />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Narotian"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/_the_stranded_alien_"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiOutlineInstagram />
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HomeSection;
