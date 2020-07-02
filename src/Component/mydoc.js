import React, { Component } from 'react'
import {Row,Col,Input, Label, Button} from 'reactstrap'
import Math from './math' 
 class mydoc extends Component {
     constructor(props)
     {
         super(props);
     }
    render() {
        return (
            <div>
                <Row>
                  <Col md={8}>
                  
                      <Math ques={this.props.element}/>
              </Col>
              <Col md={1}>
                  <Label>{this.props.element}</Label>
              </Col>
              </Row>
            </div>
        )
    }
}
export default mydoc;