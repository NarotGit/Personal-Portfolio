import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const WorkCard = (props) => {
    return (
        <Card className="work-card-view">
            <Card.Img
                className="work-card-image"
                variant="top"
                src={`/Assets/Work/${props.companyLogo}`}
                alt="work-card-img"
            />
            <Card.Body>
                <Card.Title>
                    <strong className="white fw-bold">{props.company}</strong>
                    <br />
                    {props.location}
                </Card.Title>
                <hr />
                <Card.Text className="work-card-subtitle" style={{ textAlign: 'justify' }}>
                    <strong className="purple fw-bolder">{props.designation}</strong>
                    <br />
                    <strong className="fw-bold">
                        {props.startDate} - {props.endDate}
                    </strong>
                </Card.Text>
                <Card.Text className="work-card-text" style={{ textAlign: 'justify' }}>
                    <ListGroup className="bg-transparent" as="ul">
                        {props.achievements.map((achievement, index) => (
                            <ListGroup.Item as="li" key={index}>
                                {achievement}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default WorkCard;
