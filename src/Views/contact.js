import React, { Component } from 'react';
import {
    Form,
    Input,
    Button, Card, CardBody, Container
} from 'reactstrap';
import '../Styles/contactpg.css'

class App extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
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
    render() {
        const { name, email, message } = this.state;
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
                        <Input type="text" name="name" value={name} placeholder="Your Name" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Input type="email" name="email" value={email} placeholder="youremail@email.com" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Input type="textarea" name="message" value={message} placeholder="Your Message" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Button onClick={this.submitHandler} style={{ backgroundColor: "violet" }} variant="contained" block>Send</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default App;