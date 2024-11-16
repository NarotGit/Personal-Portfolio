import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';
import Particle from '../Particle';
import skillData from '../../data/Skills/skills.json';
function Skill() {
    const skills = skillData.skills;
    const renderSkills = () => {
        return skills.map((skill, index) => (
            <Col md={4} className="work-card">
                <SkillCard
                    key={index}
                    category={skill.category}
                    logo={skill.logo}
                    overAllValue={skill.overAllValue}
                    subSkills={skill.subSkills}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="skill-section">
            <Particle />
            <Container>
                <h2 className="skill-heading">
                    {/* I am a <strong className="purple"> Data Scientist. </strong>  */}
                    <em>I always try to stay updated with AI/ML advancements, expanding expertise across various domains and industries, 
                    with a strong drive for learning new technologies and concepts.</em>
                </h2>
                <p style={{ color: 'white' }}>These are my major skills categorized by domains.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderSkills()}
                </Row>
            </Container>
        </Container>
    );
}

export default Skill;
