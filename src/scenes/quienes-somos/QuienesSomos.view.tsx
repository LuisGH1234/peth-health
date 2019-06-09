import React, { Component } from 'react';
import { Button, Input, Alert,Container,Row,Col } from 'reactstrap';
import { textQuienesSomos } from '../../commons';
import './quienes-somos.scss';

interface IState {
    showMessage: boolean;
}

class QuienesSomos extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showMessage: false,
        }
    }

    renderSentences(sentence: string, index: number) {
        return (<p key={index}>{sentence}</p>);
    }

    render() {
        const { showMessage } = this.state;
        return (
            <div className="quienes-somos-content">
                <div className="content row-1">
                    <h1 className="main-title">QUIENES SOMOS</h1>
                    <div className="who-we-are m-border">
                        {
                            textQuienesSomos.map(this.renderSentences)
                        }
                    </div>
                </div>
                <div className="content row-2">
                    <h1 className="main-title">¿QUIERES SABER MAS SOBRE NUESTRA APP?</h1>
                    <div className="registration m-border">
                        <Input placeholder="Nombre" id="input-name" />
                        <Input placeholder="Correo electronico" id ="input-email" />
                        <Button id="btn-registration" color="primary" 
                            onClick={() => this.setState(prev => ({ showMessage: !prev.showMessage }))}>
                            Enviar
                        </Button>
                        <Alert color="success" id="message-box" className={`${showMessage ? 'show-me' : ''}`}>
                            ¡Gracias por seguirnos!
                        </Alert>
                    </div>
                </div>
                <div className="content row-3">
                    <h1 className="main-title">QUIENES SOMOS</h1>
                    <Container className="container-images">
                        <Row>
                         <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/assets/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Mauricio Rivas</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/assets/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Luis Galindo</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/assets/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Sarita Rojas</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/assets/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Omar Troncos</label>
                            </div>
                          </Col>
                          <Col>
                            <div>
                                <img className="content image" src={`${process.env.PUBLIC_URL}/assets/default-user.png`} alt="error" />
                            </div><br></br>
                            <div>
                                <label className="names">Kristel Collazos</label>
                            </div>
                          </Col>
                         </Row>
                    </Container>                   
                </div>
            </div>
        );
    }
}

export default QuienesSomos;