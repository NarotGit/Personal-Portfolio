import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillCard = (props) => {
    return (
        <Card className="skill-card-view">
            <Card.Img
                className="skill-card-image"
                variant="top"
                src={`/Assets/Skills/${props.logo}`}
                alt="skill-card-img"
            />
            <Card.Body>
                <Card.Title>
                    <strong className="white fw-bold">{props.category}</strong>
                </Card.Title>
                <br />
                <Card.Subtitle>
                    <ProgressBar
                        striped
                        now={props.overAllValue * 10}
                        label={`${props.overAllValue}/10`}
                        variant="info"
                    ></ProgressBar>
                </Card.Subtitle>
                <hr />
                <Card.Text className="skill-card-text" style={{ textAlign: 'justify' }}>
                    <strong className="purple fw-bolder">{props.designation}</strong>
                    <ListGroup className="bg-transparent" as="ul">
                        {props.subSkills.map((subSkill, index) => (
                            <ListGroup.Item as="li" key={index}>
                                {subSkill}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default SkillCard;
