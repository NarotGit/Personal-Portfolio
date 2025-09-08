import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import EducationCard from '../Education/EducationCard';
import education from '../../data/Education/education.json';
function Education() {
    const renderEducation = () => {
        const educationArray = education.education;
        return educationArray.map((education, index) => (
            <Col md={index === 0 ? 12 : 6} className="education-card">
                <EducationCard
                    key={index}
                    logo={education.logo}
                    title={education.title}
                    college={education.college}
                    location={education.location}
                    score={education.score}
                    startDate={education.startDate}
                    endDate={education.endDate}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="education-section">
            <Particle />
            <Container>
                <h1 className="education-heading">
                    I am a <strong className="purple"> AI and ML Engineer. </strong>
                    Graduating from Birla Institute of Technology and Science.
                </h1>
                <p style={{ color: 'white' }}>These are my educational qualifications.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderEducation()}
                </Row>
            </Container>
        </Container>
    );
}

export default Education;
