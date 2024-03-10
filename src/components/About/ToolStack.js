import React from 'react';
import { Col, Row } from 'react-bootstrap';

import {
    SiVisualstudiocode,
    SiIntellijidea,
    SiWebstorm,
    SiDatagrip,
    SiPostman,
    SiMacos,
    SiLinux,
    SiSlack,
    SiWindows,
    SiGithub,
    SiGoland,
    SiAnaconda,
    SiGooglecolab,
    SiPowerbi,
    SiTableau,
    SiBitbucket,
    SiJirasoftware,
    SiMicrosoftoffice 
} from 'react-icons/si';
import { BiLogoMicrosoftTeams } from "react-icons/bi";
const ToolStack = () => {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            {/* <Col xs={3} md={2} className="tech-icons">
                <SiMacos />
            </Col> */}

            <Col xs={3} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <BiLogoMicrosoftTeams />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            {/* <Col xs={3} md={2} className="tech-icons">
                <SiSlack />
            </Col> */}
            <Col xs={3} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiPostman />
            </Col>

            <Col xs={3} md={2} className="tech-icons">
                <SiAnaconda />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiGooglecolab />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiPowerbi />
            </Col>
            {/* <Col xs={3} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col> */}
            {/* <Col xs={3} md={2} className="tech-icons">
                <SiWebstorm />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiDatagrip />
            </Col> */}
            <Col xs={3} md={2} className="tech-icons">
                <SiBitbucket />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiTableau />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiMicrosoftoffice />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <SiJirasoftware />
            </Col>
        </Row>
    );
};

export default ToolStack;
