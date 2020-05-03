import React, { Component } from 'react';

import { 
  Form,
  FormGroup,Label,Input,
  Button
} from 'reactstrap';
import '../Styles/contactpg.css'

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
    
      let url='https://teamtomato.herokuapp.com/api/v1/contactus';
    fetch(url,{
      method:'POST',
      headers: {'Content-Type': "application/json",
    "Accept":"application/json" },
     
      body:JSON.stringify({contact:{
      
        "name":this.state.name,
        "email":this.state.email,
        "message":this.state.message}
      })
    }).then(function (response) {
      //handle success
      console.log(response);
  })
  .catch(function (response) {
      //handle error
      console.log(response);
  });   
  }
  render(){
    const {name,email,message}=this.state;
  return (
    <div>

    <div className="header">
    <h1 className="navyblue">We wish to hear from you!</h1>
    <h4 className="yellow">Have a question?Get in touch with us.We're here for you</h4> 
    </div>

    <div className="text">
    <h2  className="brown">Give us a shout!!</h2>
    <h4>Use the quick form below to drop us a message</h4>
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
        <div className="center">
        <FormGroup row>
          <Button onClick={this.submitHandler}>Send</Button>
        </FormGroup>
        </div>
      </FormGroup>

      </Form>
      </div>
      
      <div className="text">
      <h2 className="navyblue">Let's get Together</h2>
      <h4 className="pink" > Stop by and say Hi to teamtomato.oss@gmail.com</h4>
     
      </div>

      </div>
  );
}
}

export default App;