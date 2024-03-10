import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeSection from './HomeSection';
import Interests from './Interests';
import Particle from '../../components/Particle';
import homeLogo from '../../assets/home-main.png';

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{' '}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Narotham Reddy </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Interests />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: '550px' }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeSection />
        </section>
    );
};

export default Home;
