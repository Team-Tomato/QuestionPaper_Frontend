import React, { Component } from 'react';

import { 
  Container,Form,
  FormGroup,Label,Input,
  Button
} from 'reactstrap';
import './style.css';
import axios from 'axios'

class App extends Component {

  state={
    name:'',
    email:'',
    message:''

  }
  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = e =>{
    alert("Thank you for your response.We will contact you as soon as possible!!")
    console.log(this.state)
    /*axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response =>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })*/
  }
  render(){
    const {name,email,message}=this.state;
  return (
    <div>

    <div className="header">
    <h1 style={{color:"#000080"}}>We wish to hear from you!</h1>
    <p style={{color:"#E1AD01"}}>Have a question?Get in touch with us.We're here for you</p> 
    </div>

    <div className="text">
    <h2  style={{color:"#654321"}}>Give us a shout!!</h2>
    <h4 style={{color:"A9A9A9"}}>Use the quick form below to drop us a message</h4>
    </div>

    <div className="center">
      <Form>

      <FormGroup row >
      <Label>Name</Label>
      <Input type="text" name="name" value={name} placeholder="Your Name" sm={10} onChange={this.changeHandler} />
      </FormGroup>
      
      <FormGroup row>
        <Label>Email</Label>
          <Input type="email" name="email" value={email} placeholder="youremail@email.com" sm={10} onChange={this.changeHandler}/>
      </FormGroup>

      <FormGroup row>
        <Label className="label">Message</Label>
          <Input type="textarea" name="message" value={message} placeholder="Your Message" sm={10} onChange={this.changeHandler}/>
      </FormGroup>

      <FormGroup>
        <Container className="center">
        <FormGroup row>
          <Button onClick={this.submitHandler}>Send</Button>
        </FormGroup>
        </Container>
      </FormGroup>

      </Form>
      </div>
      
      <div className="text">
      <h2 style={{color:"#000080"}}>Let's get Together</h2>
      <h4 style={{color:"#E75480"}} > Stop by and say Hi to teamtomato.oss@gmail.com</h4>
     
      </div>

      </div>
  );
}
}

export default App;