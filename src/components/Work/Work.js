import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkCard from './WorkCard';
import Particle from '../Particle';
import workData from '../../data/Work/work.json';
function Work() {
    const totalExperience = workData.totalExperience;
    const workExperience = workData.workExperience;
    const renderWorkExperiences = () => {
        return workExperience.map((work, index) => (
            <Col md={6} className="work-card">
                <WorkCard
                    key={index}
                    company={work.company}
                    companyLogo={work.companyLogo}
                    designation={work.designation}
                    location={work.location}
                    startDate={work.startDate}
                    endDate={work.endDate}
                    achievements={work.achievements}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="work-section">
            <Particle />
            <Container>
                <h1 className="work-heading">
                    I have <strong className="purple"> {totalExperience}+ Years </strong> of Work
                    Experience as a Data Scientist
                </h1>
                <p style={{ color: 'white' }}>These are all the jobs held by me so far.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderWorkExperiences()}
                </Row>
            </Container>
        </Container>
    );
}

export default Work;
