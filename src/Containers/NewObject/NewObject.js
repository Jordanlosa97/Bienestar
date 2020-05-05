import React, {Component} from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import ObjectPreview from './ObjectPreview/ObjectPreview';
import './NewObject.css';
import object from '../../Assest/Image/object.jpg';
import image from '../../Assest/Image/image.png';

class NewObject extends Component{
    constructor(props){
        super(props);
        this.state = {
            newObjectInfo: {
                name: "",
                type: "",
                description: "",
                place: "",
                date: "",
                fileURL: object,
                file: null
            },
        }
    }

    updateNewObjectData = (event, type) => {
        var updatedNewObjectInfo = {
          ...this.state.newObjectInfo
        }
        console.log(updatedNewObjectInfo)  

        if (type === "fileURL") {
            updatedNewObjectInfo[type] = URL.createObjectURL(event.target.files[0]); 
            updatedNewObjectInfo["file"] = event.target.files[0];    
        }else{
            updatedNewObjectInfo[type] = event.target.value;
        }

        this.setState({
            newObjectInfo: updatedNewObjectInfo
        }); 
    }

    render(){ 
        return(
            <Row className="newObjectContainer">
                <Col lg="12">
                    <h1>Reportar objeto</h1> 
                </Col>                
                <Col lg="6" xs="12">
                        <Form.Control className="inputObject" placeholder="Nombre objeto" onChange={(event) => this.updateNewObjectData(event, "name")}  type="text"/>
                        <Form.Control className="inputObject" placeholder="Tipo" onChange={(event) => this.updateNewObjectData(event, "type")}  type="text"/>
                        <Form.Control className="inputObject" placeholder="Descripción" onChange={(event) => this.updateNewObjectData(event, "description")} type="text"/>
                        <Form.Control className="inputObject" placeholder="Lugar donde se encontró" onChange={(event) => this.updateNewObjectData(event, "place")}  type="text"/>
                        <Form.Control className="inputObject" placeholder="Fecha" onChange={(event) => this.updateNewObjectData(event, "date")}  type="date"/>
                        <Form.Control placeholder="Imagen" className={"inputFile"} name="file" id="file" onChange={(event) => this.updateNewObjectData(event, "fileURL")}  type="file"/>
                        <label htmlFor="file" className={"inputFileLabel"} >
                            <img src={image} alt="object"></img>
                            <p>Selecciona una foto</p></label> 
                        <button onClick = {this.signUp} className={"report"}>Reportar objeto</button>
                </Col>
                <Col className="previewContainer" lg="6" xs="11">
                    <ObjectPreview data ={this.state.newObjectInfo} /> 
                </Col> 
                        
                
            </Row>
        )
    }
}

export default NewObject;
