import React, { Component } from 'react';
import '../style.css'
import { Form} from 'reactstrap'

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
    this.setState({
      query: value,
    });
  }

  render() {
    return (
      <div>
      <div className="container-search">
      <Form onSubmit={(event) => {this.props.handleSubmit(event,this.state.query)}}>
      <div className="row">
      <input type="text" className="offset-1 col-7 col-sm-7 input" onChange={this.onChange} placeholder="Type Sub name or Staff name"></input>
      <button className="col-3 col-sm-3 button">Search</button>
      </div>
      </Form>
    </div>
    </div>
    )
  }
}

export default SearchQP;