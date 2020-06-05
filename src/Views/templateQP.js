import React, { Component } from 'react';
import {Card, CardBody,Row,Input,Col,Form,Container,Button} from 'reactstrap';
import { PDFExport } from "@progress/kendo-react-pdf";
import Parta from './parta'
import '../Styles/qp-template.css'

class App extends Component {

  exportPDFWithComponent = () => {
    var highlightedItems = document.querySelectorAll(".partabut");
    highlightedItems.forEach(function(userItem) {
      userItem.remove();
    });
        this.pdfExportComponent.save();
    };
    
    render() {
        return (
            <div>
            <Card className="gradient">
                <CardBody className="welcome-title" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white'
                }}>
                    <h4>Work in Porgress. Check us at 01.06.2020</h4>
                </CardBody>
            </Card>
            <Container>
          <Button onClick={this.exportPDFWithComponent}>Generate PDF</Button>
          <PDFExport
              ref={component => (this.pdfExportComponent = component)}
              paperSize="auto"
              margin={40}
              fileName={`Report for ${new Date().getFullYear()}`}
              author="KendoReact Team">
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Row className="form-group row-align">
              <Col md={3} className=" offset-md-9">
                <Input type="date" className="form-control" onChange={this.handleChange} id="date" name="date" placeholder="Date"/>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={6}>
                <Input type="text" className="form-control" onChange={this.handleChange} id="subject" name="subject" placeholder="Subject"/>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={3}>
                <Input type="text" className="form-control" onChange={this.handleChange} id="semester" name="semester" placeholder="Semester"/>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={6}>
                <Input type="text" className="form-control" onChange={this.handleChange} id="course" name="course" placeholder="Course"/>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={3}>
                <Input type="text" className="form-control" onChange={this.handleChange} id="regulation" name="regulation" placeholder="Regulation"/>
              </Col>
          </Row>
          <Row className="form-group">
              <Col md={3}>
                <Input type="text" className="form-control" onChange={this.handleChange} id="time" name="time" placeholder="Time"/>
              </Col>
              <Col md={3} className="offset-md-6">
              <Input type="number" className="form-control" onChange={this.handleChange} id="mark" name="mark" placeholder="Total Marks"/>
              </Col>
          </Row>
          <hr/>
          <Parta/>
          <hr/>
          </Form>
          </PDFExport>
      </Container>
            </div>
        );
    }
}

export default App;