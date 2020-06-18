import React, { Component } from 'react';
import {
    Form,
    Card, CardBody, Container,
} from 'reactstrap';
import '../Styles/contactpg.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`{
    label.Mui-focused {
      color: violet;
    }
    .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: violet;
      }
    }`;

class App extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        touched:{
            name:false,
            email:false,
            message:false
        },
        errors:{
            name:'',
            email:'',
            message:''
        }
    }

    validate(name,email,message){
      
          if(this.state.touched.name&&name===''){
            this.state.errors.name="Name should not be empty";
          }
          else if(this.state.touched.name&&name.length<5){
            this.state.errors.name="Name should not be less than 5 characters"
          }
          else if(this.state.touched.name&&name.length>20){
            this.state.errors.name="Name should not be greater than 20 characters"
          }
          else{
            this.state.errors.name=""
          }

          const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

          if(this.state.touched.email&&email===''){
            this.state.errors.email="Email should not be empty";
          }
          else if(this.state.touched.email&&!reg.test(email)){
            this.state.errors.email="Enter a valid Email address"
          }
          else{
            this.state.errors.email=""
          }

          if(this.state.touched.message&&message===''){
            this.state.errors.message="Message should not be empty"
          }
          else{
            this.state.errors.message=""
          }

    }

    handleBlur=(field)=>(evt)=>{
        this.setState({
          touched:{...this.state.touched,[field]:true}
        })
      }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        const touch=this.state.touched;
        const error=this.state.errors;

        if(touch.name&&error.name==='' && touch.email&&error.email==='' && touch.message&&error.message===''){
        alert("Thank you for your mail. We will contact you with in 24 Hrs")

        let url = 'https://teamtomato.herokuapp.com/api/v1/contactus';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                contact: {
                    "name": this.state.name,
                    "email": this.state.email,
                    "message": this.state.message
                }
            })
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            });
        }
        else{
            alert("Some field is not filled correctly!!")
        }
    }
    render() {
        
        const { name, email, message } = this.state;
        this.validate(this.state.name,this.state.email,this.state.message)
        return (
            <div>
                <div className="header">
                    <h1>We will be happy to hear from you !</h1>
                    <h4>Get in touch with us.</h4>
                </div>
                <Container>
                    <Card className="indentCorrection">
                        <CardBody>
                            <h5>Use the public key</h5>
                            <h2 className="violet">D16C 2228 B32C EA4A B6B8 B92B EE4D DD8F DA96 7765</h2>
                            <h5>to mail us at teamtomato.oss@gmail.com</h5>
                        </CardBody>
                    </Card>

                    <h3 className="center">or</h3>
                    <Form>
                        <StyledTextField fullWidth type="text" name="name" value={name} style={{marginBottom:"10px"}}
                        size="small" error={this.state.errors.name!==''} onBlur={this.handleBlur('name')}
                        onChange={this.changeHandler} id="outlined-error-helper-text" label="Your Name"
                        helperText={this.state.errors.name} variant="outlined"/>
                        
                        <StyledTextField fullWidth type="email" name="email" value={email} style={{marginBottom:"10px"}}
                        size="small" error={this.state.errors.email!==''} onBlur={this.handleBlur('email')}
                        onChange={this.changeHandler} id="outlined-error-helper-text" label="youremail@email.com"
                        helperText={this.state.errors.email} variant="outlined"/>
                        
                        <StyledTextField id="outlined-multiline-static" label="Your Message" multiline  style={{marginBottom:"10px"}}
                        name="message" fullWidth error={this.state.errors.message!==''} onBlur={this.handleBlur('message')}
                        onChange={this.changeHandler} value={message} helperText={this.state.errors.message}
                        rows={4} variant="outlined"/>
                        <br />
                        <Button onClick={this.submitHandler} className="col-md-12" style={{ backgroundColor: "violet",color:"white" }} variant="contained" block>Send</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default App;