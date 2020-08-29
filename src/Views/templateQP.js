import React, { Component } from 'react';
import {Form,Container,Row,Col,Input,Button,Label, FormFeedback} from 'reactstrap'
import { PDFExport} from "@progress/kendo-react-pdf";
import Parta from '../Component/parta'

import '../Styles/template.css';
import { Document, Page, Text, View, StyleSheet,PDFViewer } from '@react-pdf/renderer';
class template extends Component {

  constructor(){
    super();
    this.state={
        date:'',
        subject:'',
        semester:'',
        course:'',
        regulation:'',
        time:'',
        marks:'',
        touched:
          {
            date:false,
            subject:false,
            semester:false,
            course:false,
            regulation:false,
            time:false,
            marks:false,
          }
        
      
    }
    this.handleBlur=this.handleBlur.bind(this)
  }

  validate(date,rollno,subject,semester,course,regulation,time,marks){
    const errors={
      date:'',
      subject:'',
      semester:'',
      course:'',
      regulation:'',
      time:'',
      marks:''
    }

    if(this.state.touched.date&&date=='')
      errors.date="Date should not be empty";

    if(this.state.touched.subject&&subject=='')
      errors.subject="Subject should not be empty";

      if(this.state.touched.semester&&semester=='')
      errors.semester="Semester should not be empty";

      if(this.state.touched.course&&course=='')
      errors.course="Course should not be empty";

      if(this.state.touched.regulation&&regulation=='')
      errors.regulation="Regulation should not be empty";

      if(this.state.touched.time&&time=='')
      errors.time="Time should not be empty";

      if(this.state.touched.marks&&marks=='')
      errors.marks="Marks should not be empty";

      return errors;
    
  }

  handleBlur=(field)=>(evt)=>{
    this.setState({
      touched:{...this.state.touched,[field]:true}
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.state[name] = value; 
  };

    

  render(){
    
    const errors=this.validate(this.state.date,this.state.rollno,this.state.subject,this.state.semester,this.state.course,this.state.regulation,this.state.time,this.state.marks)
    return(
        <Container>
          
          
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Row className="form-group">
              <Col md={3}>
                <Input type="date" className="form-control" style={{textAlign:'center'}} onChange={this.handleChange}
                onBlur={this.handleBlur('date')}
              
                invalid={errors.date!==''}
                 id="date" name="date" placeholder="Date"/>
                 <FormFeedback>{errors.date}</FormFeedback>
              </Col>
              <Col md={3} className="offset-md-6">
                <Label type="text" className="form-control" style={{textAlign:'center'}}
                 id="rollno" name="rollno" value="Roll Number">Roll Number</Label>
              </Col>
              
          </Row>
          <Row className="form-group row-align">
              <Col md={6}>
                <Input style={{textAlign:'center'}}  type="text" className="form-control"
                onBlur={this.handleBlur('subject')}
                
                invalid={errors.subject!==''}
                 onChange={this.handleChange} id="subject" name="subject" placeholder="Subject"/>
                 <FormFeedback>{errors.subject}</FormFeedback>
              </Col>
              
          </Row>
          <Row className="form-group row-align">
              <Col md={3}>
              <Input style={{textAlign:'center'}} type="select" className="form-control"
              onBlur={this.handleBlur('semester')}
              invalid={errors.semester!==''} onChange={this.handleChange} id="semester" name="semester" placeholder="Semester">
                <option value=""style={{textAlign:'center'}}>--Select Exam--</option>
                <option value="Assessment-I">Assessment-I</option>
                <option value="Assessment-II">Assessment-II</option>
                <option value="Semester">Semester</option>
                </Input>
            <FormFeedback>{errors.semester}</FormFeedback>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={6}>
                <Input style={{textAlign:'center'}} type="text" className="form-control"
                onBlur={this.handleBlur('course')}
                invalid={errors.course!==''} onChange={this.handleChange} id="course" name="course" placeholder="Course"/>
                <FormFeedback>{errors.course}</FormFeedback>
              </Col>
          </Row>
          <Row className="form-group row-align">
              <Col md={3}>
                <Input style={{textAlign:'center'}} type="text" className="form-control"
                onBlur={this.handleBlur('regulation')} 
                invalid={errors.regulation!==''} onChange={this.handleChange} id="regulation" name="regulation" placeholder="Regulation"/>
                <FormFeedback>{errors.regulation}</FormFeedback>
              </Col>
          </Row>
          <Row className="form-group">
              <Col md={3}>
              <Input type="select" style={{textAlign:'center'}} className="form-control"
              onBlur={this.handleBlur('time')} 
              invalid={errors.time!==''} onChange={this.handleChange} id="time" name="time" placeholder="Time">
              <option value="">--Select Time--</option>
              <option value="1.5 hrs">1.5 hrs</option>
              <option value="3 hrs">3 hrs</option>
                </Input>
                <FormFeedback>{errors.time}</FormFeedback>
              </Col>
              <Col md={3} className="offset-md-6">
              <Input type="select" style={{textAlign:'center'}} className="form-control"
              onBlur={this.handleBlur('marks')} 
              invalid={errors.marks!==''} onChange={this.handleChange} id="marks" name="marks" placeholder="Total Marks">
              <option value="">--Select Total Marks--</option>
              <option value="50">50</option>
              <option value="100">100</option>
                </Input>
               <FormFeedback>{errors.marks}</FormFeedback>
              </Col>
          </Row>
          <hr/>
          <Parta header={this.state}/>
          <hr/>
          </Form>
         
    
      </Container>
    )
  }

 
}
 export default template;