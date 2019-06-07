import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './members.scss'

class Members extends Component {
    render(){
        return(
            <>
                    <h1 className="main-title">QUIENES SOMOS</h1>
            <Row>
            <Col>.col</Col>
            <Col>.col</Col>
            <Col>.col</Col>
            <Col>.col</Col>
          </Row>
          </>
        );
    }
}

export default Members;