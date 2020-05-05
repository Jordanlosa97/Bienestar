import React from 'react';
import './ObjectPreview.css';
import {Row, Col} from 'react-bootstrap';

const ObjectPreview = (props)  => {

    return(
        <Row className="preview">
            <Col lg="4" xs="12">
                <img alt="profile-pic" className="photo" src={props.data.fileURL}/>
            </Col>
            <Col lg="8" xs="12" className="objectData"> 
                <Row>
                    
                    <Col lg="12">
                    <span><strong>Nombre: </strong>{props.data.name}</span>
                    </Col> 
                    <Col lg="12">
                    <span><strong>Tipo: </strong>{props.data.type}</span>
                    </Col> 
                    <Col lg="12">
                    <span><strong>Descripción: </strong>{props.data.description}</span>
                    </Col> 
                    <Col lg="12">
                    <span><strong>Lugar: </strong>{props.data.place}</span>
                    </Col> 
                    <Col lg="12">
                    <span><strong>Fecha: </strong>{props.data.date}</span>
                    </Col> 
                </Row>
                    
            </Col> 
        </Row>
    )
} 

export default (ObjectPreview);