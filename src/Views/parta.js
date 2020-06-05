import React, { Component } from "react";
import {Row,Col,Input, Label, Button} from 'reactstrap'
import Partb from './partb'
import Math from './math' 
import 'katex/dist/katex.min.css';

class Parta extends Component {
  constructor(){
    super();
   
    this.state={
      subload:false,
      sub:["a","b","c","d"],
      qp:
      [
        {
        question:"",
        mark:"",
      subqp:
          [
           
          ]
        }
    ]
    
    }
  }

  // handle input change
   handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.qp];
    list[index][name] = value; 
    this.setState({qp:list})
  };

  handleInputsubChange = (e, index,subid) => {
    const { name, value } = e.target;
    this.state.qp[index].subqp[subid][name] = value;
    this.setState(this.state.qp[index].subqp[subid])
  };
 
  // handle click event of the Remove button
   handleRemoveClick = index => {
    const list = [...this.state.qp];
    list.splice(index, 1);
    this.setState({qp:list})
  };

  handleRemovesubClick = (index,subid) => {
    this.state.qp[index].subqp.splice(subid, 1);
    this.setState(this.state.qp[index].subqp)
  };
 
  // handle click event of the Add button
   handleAddClick = (e) => {
    this.setState((prevState)=>({
      qp:[...prevState.qp,{question:"",mark:"",subqp:[]}]
    }))
  };

  handleSubClick = index => {
    this.state.qp[index].subqp.push({question:"",mark:""})
    this.setState({subload:true})

  };
 
  render(){
    
  return (
    <div> 
    <Row className="form-group row-align">
                        <Col md={3} className="offset-md-4">
                            <Label  className="form-control" id="part-a" align="center">PART-A</Label>
                        </Col>
                        <Col md={1}>
                       { <Button id="button" className="partabut" color="primary" onClick={this.handleAddClick}>Add</Button>}
                       </Col>
                        <Col md={3} className="offset-md-1">
                            <Input type="number" className="form-control" id="part-a_mark" placeholder="Total Mark"/>
                        </Col>
                        
                </Row>
      {
      this.state.qp.map((x,id) => {
        return (
              <div>
          {this.state.qp[id].subqp.length!==0?<div>{this.state.qp[id].subqp.map((xb,subid)=><div><Row className="form-group" key={id}>
              <Col md={1}>
                  {
                  <Button id="button" className="partabut" color="danger" onClick={() => this.handleRemovesubClick(id,subid)}>Del</Button>}
              </Col>
              <Col md={1}>
                  <Label type="number" className="form-control" id="q_no" name="id">{id+1+"."+this.state.sub[subid]+")"}</Label>
              </Col>
              <Col md={8}>
                  <Input name="question" className="form-control" placeholder="Questions"
                      value={xb.question} onChange={e => this.handleInputsubChange(e, id, subid)}/>
                      <Math ques={xb.question}/>
              </Col>
              <Col md={1}>
                  <Input type="number" className="form-control ml10" name="mark" placeholder="M"
                      value={xb.mark} onChange={e => this.handleInputsubChange(e, id)}/>
              </Col>
              <Col md={1}>
                  {<Button id ="button" className="partabut" onClick={()=>this.handleSubClick(id)}>Sub</Button>}
              </Col>
                  </Row></div>)}</div>:<div><Row className="form-group" key={id}>
              <Col md={1}>
                  {this.state.qp.length !== 1 && 
                  <Button id ="button" className="partabut" color="danger" onClick={() => this.handleRemoveClick(id)}>Del</Button>}
              </Col>
              <Col md={1}>
                  <Label type="number" className="form-control" id="q_no" name="id">{id+1}</Label>
              </Col>
              <Col md={8}>
                  <Input name="question" className="form-control" placeholder="Questions"
                      value={x.question} onChange={e => this.handleInputChange(e, id)}/>
                  <Math ques={x.question}/>
              </Col>
              <Col md={1}>
                <Input type="number" className="form-control ml10" name="mark" placeholder="M"
                      value={x.mark} onChange={e => this.handleInputChange(e, id)}/>
              </Col>
              <Col md={1}>
                  {<Button id ="button" className="partabut" onClick={()=>this.handleSubClick(id)}>Sub</Button>}
              </Col>
            </Row></div>}     
        </div>    
          );
        }
      )}
      <hr/>
      <Partb id={this.state.qp.length}/>     
    </div>
  );
}}
 
export default Parta;