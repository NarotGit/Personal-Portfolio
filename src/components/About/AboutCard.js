import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, I am <span className="purple">Narotham Reddy </span>
                        from <span className="purple"> Hyderabad, Telangana, India.</span>
                        <br /> I am a{' '}
                        <span className="purple">
                            Electronics and Communication Engineering Graduate from 
                            KG Reddy Engineering College, Hyderabad
                        </span>
                        .
                        <br />
                        Currently I am working as an{' '}
                        <span className="purple">Data Scientist at RMES India Pvt. Ltd</span>.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Reading Books and Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Learning about Tech, Space, Geology, and Global Affairs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening Music and Watching Series & Documentaries
                        </li>
                    </ul>

                    <p style={{ color: 'rgba(25, 146,194)' }}>
                        {/* "Never give up on what you love to do or are learning to succeed in!"{' '} */}
                        "Everything works out if you truly start working towards it!"{' '}
                    </p>
                    <footer className="blockquote-footer">Narot</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
