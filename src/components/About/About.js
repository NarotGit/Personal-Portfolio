import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Particle from '../Particle';
// import Github from './GitHub';
import TechStack from './TechStack';
import ToolStack from './ToolStack';
import AboutCard from './AboutCard';
import aboutImage from '../../assets/about.png';

const About = () => {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: 'center',
                            paddingTop: '30px',
                            paddingBottom: '50px',
                        }}
                    >
                        <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: '120px', paddingBottom: '50px' }}
                        className="about-img"
                    >
                        <img src={aboutImage} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Key Professional <strong className="purple">Skills </strong>
                </h1>

                <TechStack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <ToolStack />

                {/*<Github />*/}
            </Container>
        </Container>
    );
};

export default About;
