import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub, BsMedium } from 'react-icons/bs';

const ProjectCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img
                variant="top"
                src={`/Assets/Projects/${props.imagePath}`}
                alt="project-card-img"
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
                <Button variant="primary" href={props.gitHubLink} target="_blank">
                    {props.hasGitHubRepo && (
                        <>
                            <BsGithub />
                            &nbsp; GitHub
                        </>
                    )}
                </Button>
                {'\n'}
                {'\n'}
                {props.hasDemoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <CgWebsite /> &nbsp;
                        {'Demo'}
                    </Button>
                )}
                {'\n'}
                {'\n'}
                {props.hasBlog && (
                    <Button
                        variant="primary"
                        href={props.blogLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                    >
                        <BsMedium /> &nbsp;
                        {'Blog'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};
export default ProjectCard;
