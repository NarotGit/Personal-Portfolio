import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsGithub, BsLink } from 'react-icons/bs';

const CourseCard = (props) => {
    return (
        <Card className="course-card-view">
            <Card.Img
                variant="top"
                src={`/Assets/Courses/${props.imagePath}`}
                alt="course-card-img"
            />
            <Card.Body>
                <Card.Title>
                    {props.issuer} ({props.instructor})
                    <br /> <br />
                    <strong className="fw-bolder purple">{props.title}</strong>
                </Card.Title>
                <hr />
                <Card.Text style={{ textAlign: 'justify' }}>
                    <strong className="fw-bold">{props.description}</strong>
                    <br />
                    <br />
                    {props.completionDate} ({props.duration})
                </Card.Text>
                {props.link && (
                    <Button
                        variant="primary"
                        href={props.link}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <BsLink />
                        &nbsp; Link
                    </Button>
                )}
                {'\n'}
                {'\n'}
                {props.gitHubLink && (
                    <Button
                        variant="primary"
                        href={props.gitHubLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <BsGithub />
                        &nbsp; GitHub
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};
export default CourseCard;
