import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './CourseCard';
import Particle from '../Particle';
import courseData from '../../data/Courses/courses.json';
function Course() {
    const renderCourses = () => {
        const coursesArray = courseData.courses;
        return coursesArray.map((course, index) => (
            <Col md={3} className="project-card">
                <CourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    issuer={course.issuer}
                    instructor={course.instructor}
                    imagePath={course.imagePath}
                    completionDate={course.completionDate}
                    duration={course.duration}
                    link={course.link}
                    gitHubLink={course.gitHubLink}
                />
            </Col>
        ));
    };

    return (
        <Container fluid className="course-section">
            <Particle />
            <Container>
                <h1 className="course-heading">
                    <strong className="purple"> Courses </strong>
                </h1>
                <p style={{ color: 'white' }}>Here are the courses done by me.</p>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    {renderCourses()}
                </Row>
            </Container>
        </Container>
    );
}

export default Course;
