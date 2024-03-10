import React from 'react';
import Card from 'react-bootstrap/Card';

const EducationCard = (props) => {
    return (
        <Card className="education-card-view">
            <Card.Body>
                <Card.Title>
                    <strong className="white fw-bold">{props.college}</strong>
                    <br />
                    {props.location}
                </Card.Title>
                <hr />
                <Card.Text className="education-card-subtitle" style={{ textAlign: 'justify' }}>
                    <strong className="fw-bolder">{props.title}</strong>
                    <br />
                    <strong className="fw-bold">
                        {props.startDate} - {props.endDate}
                    </strong>
                    <br />
                    <strong className="purple fw-bolder">{props.score}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default EducationCard;
