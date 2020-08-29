import React, { Component } from "react";
import {Row,Col,Input, Label, Button, FormFeedback} from 'reactstrap'
import Partc from './partc'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Math from './math' 
import 'katex/dist/katex.min.css';
import subdivide from '../images/subdivide.png'

class Partb extends Component {
  constructor(){
    super();
   
    this.state={
      subload:false,
      total:'',
      touched:[
        {
          total:false
        }
      ],
      sub:["a","b","c","d"],
      qp:
      [
        {
        question:"",
        mark:"",
        touched:{
          question:false,
          mark:false,
        },
        file: '',
        imagePreviewUrl: '',
        errors:{
          question :"error",
          mark:"error"
        },
      subqp:
          [
           
          ]
        }
    ]
    
    }
    this.handleBlur=this.handleBlur.bind(this)
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleImageSubChange = this._handleImageSubChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  handleBlurTotal=(field)=>(evt)=>{
    this.setState({
      touched:{...this.state.touched,[field]:true}
    })
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e,index) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      const list = [...this.state.qp];
      list[index].file =file;
      list[index].imagePreviewUrl=reader.result;  
      this.setState({
        qp:list
      });
    }
    if(file)
    reader.readAsDataURL(file)
  }
  _handleImageSubChange(e,id,index) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.state.qp[id].subqp[index].file=file;
      this.state.qp[id].subqp[index].imagePreviewUrl=reader.result;
      this.setState(
        this.state.qp[id].subqp[index]
      );
    }
    if(file)
    reader.readAsDataURL(file)
  }

  submit = (e,id) => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this Question
              ?</p>
            <button onClick={onClose}>Cancel</button>
            <div>
            <button
              onClick={() => {
                this.handleRemoveClick(id);
                onClose();
              }}
            >
               Yes, Delete it!
            </button>
            </div>
          </div>
        );
      }
    });
    
  };

  submitsub (e,id,subid) {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this Question
              ?</p>
            <button onClick={onClose}>Cancel</button>
            <div>
            <button
              onClick={() => {
                this.handleRemovesubClick(id,subid);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
            </div>
          </div>
        );
      }
    });
  };
 

  handletotal=e=>{
    const {value} = e.target;
    this.setState({total:value})
  }

  validate(total){
    const errors={
      total:'',
    }

    if(this.state.touched.total&&total=='')
      errors.total="Total should not be empty";

    return errors;
  }
  validateQp(question,mark,id){
    if(this.state.qp[id].touched.question&&question=='')
    this.state.qp[id].errors.question="Question should not be empty";
    if(this.state.qp[id].touched.mark&&mark=='')
    this.state.qp[id].errors.mark="Mark should not be empty";
    
  }
  validateSubQp(question,mark,id,subid){
    if(this.state.qp[id].subqp[subid].touched.question&&question=='')
    this.state.qp[id].subqp[subid].errors.question="Question should not be empty";
    if(this.state.qp[id].subqp[subid].touched.mark&&mark=='')
    this.state.qp[id].subqp[subid].errors.mark="Mark should not be empty";
  }
  // handle input change
   handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.qp];
    list[index][name] = value; 
    if(name=="question"&&list[index][name]!='')
    {
      list[index].errors.question='error';
      this.setState({qp:list})
    }
    if(name=="mark"&&list[index][name]!='')
    {
      list[index].errors.mark='error';
      this.setState({qp:list})
    }
    this.setState({qp:list})
  };

  handleInputsubChange = (e, index,subid) => {
    const { name, value } = e.target;
    this.state.qp[index].subqp[subid][name] = value;
    if(name=="question"&&this.state.qp[index].subqp[subid].question!=''){
      this.state.qp[index].subqp[subid].errors.question='error'
      this.setState(this.state.qp[index].subqp[subid])
    }
    if(name=="mark"&&this.state.qp[index].subqp[subid].mark!=""){
      this.state.qp[index].subqp[subid].errors.mark='error'
      this.setState(this.state.qp[index].subqp[subid])
    }
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
      qp:[...prevState.qp,{question:"",mark:"",subqp:[],touched:{
        question:false,
        mark:false,
      },
      file: '',
        imagePreviewUrl: '',
      errors:{
        question :"error",
        mark:"error"
      }}]
    }))
  };

  handleSubClick = index => {
    this.state.qp[index].subqp.push({question:"",mark:"",file: '',
    imagePreviewUrl: '',touched:{
      question:false,
      mark:false,
    },
    errors:{
      question :"error",
      mark:"error"
    }})
    this.setState({subload:true})
  };

  handleBlur=(field,id)=>(evt)=>{
    const list = [...this.state.qp];
    list[id].touched[field] = true; 
    this.setState({qp:list})
  }
  handleBlurSubQp=(field,index,subid)=>(evt)=>{
    console.log(this.state.qp[index].subqp[subid].touched[field])
    this.state.qp[index].subqp[subid].touched[field]=true;
    this.setState(this.state.qp[index].subqp[subid])
    }
  render(){
    const errors=this.validate(this.state.total)
    return (
      <div> 
      <Row className="form-group row-align">
                          <Col md={3} className="offset-md-4">
                              <Label  className="form-control" id="part-a" align="center">PART-B</Label>
                          </Col>
                          <Col md={1}>
                         { <Button id="button" className="partabut button" style={{backgroundColor:"violet",variant:"fixed"}} onClick={this.handleAddClick}><i class="fa fa-plus" aria-hidden="true"></i></Button>}
                         </Col>
                          <Col md={2} className="offset-md-1">
                              <Input type="number" className="form-control"
                              onBlur={this.handleBlurTotal('total')}
                           
                              invalid={errors.total!==''} name="total" onChange={this.handletotal} placeholder="Total Mark"/>
                              <FormFeedback>{errors.total}</FormFeedback>
                          </Col>
                          
                  </Row>
        {
        this.state.qp.map((x,id) => {
          return (
                <div>
                  {this.validateQp(x.question,x.mark,id)}
          <Row className="form-group" key={id}>
          <Col md={1}>
          {this.state.qp.length !== 1 && x.subqp.length<1 &&<Button color="danger" onClick={e=>this.submit(e,id)}><i class="fa fa-minus" aria-hidden="true"></i></Button>}
          </Col>
             
                <Col md={1}>
                  {this.state.qp[id].subqp.length!==0?<Label type="number" className="form-control" id="q_no" name="id">
                    {this.props.id+1+id+"."+this.state.sub[0]+")"}</Label>
                  :<Label type="number" className="form-control" id="q_no" name="id">{this.props.id+1+id}</Label>}
                   
                </Col>
                <Col md={8}>
                    <Input name="question" className="form-control" placeholder="Questions"
                        onBlur={this.handleBlur('question',id)}
                        invalid={x.errors.question!=='error'} value={x.question} onChange={e => this.handleInputChange(e, id)}/>
                        <FormFeedback>{x.errors.question}</FormFeedback><br/>
                    <Math ques={x.question}/>
                    <Input type="file" style={{paddingTop: "8px"}} onChange={e=>this._handleImageChange(e,id)} />
                  <img style={{padding:"15px",paddingLeft:"140px"}} height="300px" src={x.imagePreviewUrl} />
                </Col>
                <Col md={1}>
                  <Input type="number" className="form-control ml10" name="mark" placeholder="M"
                        onBlur={this.handleBlur('mark',id)}
                        invalid={x.errors.mark!=='error'} value={x.mark} onChange={e => this.handleInputChange(e, id)}/>
                <FormFeedback>{x.errors.mark}</FormFeedback>
                </Col>
                <Col md={1}>
                    {<Button id ="button" className="partabut" style={{background:"violet"}} onClick={()=>this.handleSubClick(id)}><img width="26px" src={subdivide} /></Button>}
                </Col>
              </Row>   
              <div>{this.state.qp[id].subqp.map((xb,subid)=><div>
                {this.validateSubQp(xb.question,xb.mark,id,subid)}
                <Row className="form-group" key={id}>
                <Col md={1}>
                {<Button color="danger" onClick={e=>this.submitsub(e,id,subid)}><i class="fa fa-minus" aria-hidden="true"></i></Button>}
                </Col>
                <Col md={1}>
                    <Label type="number" className="form-control" id="q_no" name="id">{this.props.id+1+id+"."+this.state.sub[subid+1]+")"}</Label>
                </Col>
                <Col md={8}>
                    <Input name="question" className="form-control" placeholder="Questions"
                        onBlur={this.handleBlurSubQp("question",id,subid)}
                        invalid={xb.errors.question!=='error'} value={xb.question} onChange={e => this.handleInputsubChange(e, id, subid)}/>
                       <FormFeedback>{xb.errors.question}</FormFeedback><br/>
                        <Math ques={xb.question}/>
                        <Input type="file" style={{paddingTop: "8px"}} onChange={e=>this._handleImageSubChange(e,id,subid)} />
                  <img style={{padding:"15px",paddingLeft:"140px"}} height="300px" src={xb.imagePreviewUrl} />
                </Col>
                <Col md={1}>
                    <Input type="number" className="form-control ml10" name="mark" placeholder="M"
                         onBlur={this.handleBlurSubQp("mark",id,subid)}
                         invalid={xb.errors.mark!=='error'} value={xb.mark} onChange={e => this.handleInputsubChange(e, id,subid)}/>
                <FormFeedback>{xb.errors.mark}</FormFeedback>
                </Col>
                <Col md={1}>
                    {<Button id ="button" className="partabut" style={{background:"violet"}} onClick={()=>this.handleSubClick(id)}><img width="26px" src={subdivide} /></Button>}
                </Col>
                    </Row></div>)}</div>
          </div>    
            );
          }
        )}
        <hr/>
        <Partc idb={this.props.id+this.state.qp.length} id_a={this.props.id} id_b={this.state.qp.length} sab={this.props.sa} sb={this.state} header={this.props.header} totala={this.props.total} totalb={this.state.total}/>
      </div>
    );
}}
 
export default Partb;
 