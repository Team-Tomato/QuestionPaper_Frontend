import React, { Component } from 'react';
import '../Styles/style.css'
import { Form, Row, Col, Input, Container, Card, CardBody } from 'reactstrap'
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

const valreg=RegExp(/^\s+$/)
class SearchQP extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = e => {
    const { value } = e.target;
    let qperror= this.state.qperror;  
    if (value.length === 0 || valreg.test(value))
    {
      qperror = true;
    }
    else
    {
      qperror = false;
    }         
    this.setState({qperror,value },()=>console.log(this.state)) ;
    this.setState({
      query: value,
    });
  }

  render() {
    const {qperror}=this.state
    return (
      <Container>
        <br />
        <Card className="correctMargin">
          <CardBody className="removeIndent">
            <Form onSubmit={(event) => { this.props.handleSubmit(event, this.state.query) }}>
              <Row className="addSpace">
                <Col sm={6} md={8} lg={10} className="addIndent">
                <StyledTextField  fullWidth type="text" name="keywordSearch" label="Search subject name or staff"  onChange={this.onChange} id="outlined-size-small keywordSearch" variant="outlined"size="small"/>
                  {qperror === true && (
                    <div className="errormessage">subject or staff name is required</div>
                  )}
                </Col>
                <Col sm={6} md={4} lg={2} className="addIndent">
                 <Button className="col-md-12" type="submit" disabled={!this.state.value || this.state.value.trim().length === 0} style={{ backgroundColor: "violet",color:"white"}} variant="contained" block>Search</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default SearchQP;