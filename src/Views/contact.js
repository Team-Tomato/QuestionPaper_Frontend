import React, { Component } from 'react';
import {
    Form, 
    Input,
    Button
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
                    <h4 className="violet">
                        Want to join the team? || Having an awesome idea to implement? || Any question? <br />
                    </h4>
                    <h4>Get in touch with us.</h4>
                </div>

                <div className="center">
                    <Form>
                        <Input type="text" name="name" value={name} placeholder="Your Name" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Input type="email" name="email" value={email} placeholder="youremail@email.com" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Input type="textarea" name="message" value={message} placeholder="Your Message" sm={10} onChange={this.changeHandler} />
                        <br />
                        <Button onClick={this.submitHandler} style={{ backgroundColor: "violet" }} variant="contained" block>Send</Button>
                    </Form>
                </div>

                <div className="text">
                    <text>For</text> <text className="violet">secreat</text> <text>conversation,</text>
                    <h6 className="pink" > Stop by and say Hi to teamtomato.oss@gmail.com</h6>
                </div>
            </div>
        );
    }
}

export default App;