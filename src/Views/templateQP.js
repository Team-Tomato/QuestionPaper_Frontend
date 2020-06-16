import React, { Component } from 'react';
import {Card, CardBody} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Card className="gradient">
                <CardBody className="welcome-title" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white'
                }}>
                    <h4>Work in Porgress. Check us at 30.06.2020</h4>
                </CardBody>
            </Card>
        );
    }
}

export default App;