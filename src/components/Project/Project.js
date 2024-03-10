import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Particle from '../Particle';
import projects from '../../data/Projects/projects.json';
function Project() {
    const renderProjects = () => {
        const projectsArray = projects.projects;
        return projectsArray.map((project, index) => (
            <Col md={3} className="project-card">
                <ProjectCard
                    key={index}
                    imagePath={project.imagePath}
                    title={project.title}
                    description={project.description}
                    hasBlog={project.hasBlog}
                    hasGitHubRepo={project.hasGitHubRepo}
                    hasDemoLink={project.hasDemoLink}
                    gitHubLink={project.gitHubLink}
                    demoLink={project.demoLink}
                    blogLink={project.blogLink}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple"> Code & Projects </strong>
                </h1>
                <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderProjects()}
                </Row>
            </Container>
        </Container>
    );
}

export default Project;
