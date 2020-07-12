import React, { Component } from 'react'
import {Row,Col,Input, Label, Button} from 'reactstrap'
import Math from './math' 
import Popup from 'reactjs-popup';
import Scroll from 'react-scroll';
import { PDFExport } from "@progress/kendo-react-pdf";
import subdivide from '../images/subdivide.png'
import MathJax from 'react-mathjax2'
import html2canvas from 'html2canvas'

 
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  }
})

 class mydoc extends Component {
     constructor(props)
     {
         super(props);
     }
    
    exportPDFWithComponent() {
      const element = document.querySelector("#pdf")

        // this.pdfExportComponent.save();
    };

    async componentDidMount() {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=default";
      script.type = "text/x-mathjax-config"
      script.value = MathJax.Hub.Config({
        extensions: ["tex2jax.js", "TeX/AMSmath.js"],
        jax: ["input/TeX", "output/SVG"],
      });
      document.body.appendChild(script);
     
      // MathJax.Hub.Register.StartupHook("MathMenu Ready",function () {
      //   MathJax.Hub.Config({
      //     extensions: ["tex2jax.js", "TeX/AMSmath.js"],
      //     jax: ["input/TeX", "output/SVG"],
      //   });
      //   MathJax.Menu.BGSTYLE["z-index"] = 2001;
      // });
      
    }
   
    render() {
        return (
        
          <div id="pdf">
          <div>
            <PDFExport
                        ref={component => (this.pdfExportComponent = component)}
                        paperSize="auto"
                        margin={40}
                        fileName={`Report for ${new Date().getFullYear()}`}
                        author="KendoReact Team"
                    >
            <div id="convert">
            
            <Row className="form-group">
              <Col md={5}>
                <Label >{"Date : "+this.props.header.date}</Label>
              </Col>
              <Col md={3} className="offset-md-4">
                <Label >{"Rollno : "}</Label>
              </Col>
          </Row>
          <Row className="form-group row-align">
          <div>$$a sum_(i=1)^n i^3=((n(n+1))/2)^2 $$</div>
          <div>$$a asqrtb $$</div>
          <div>$$a sum_(i=1)^n i^3=((n(n+1))/2)^2 $$</div>

          <Label style={{textAlign:'center'}}>{"Subject : "+this.props.header.subject}</Label>
          </Row>
          <Row className="form-group row-align"> 
          <Label style={{textAlign:'center'}}>{"Semester : "+this.props.header.semester}</Label> 
          </Row>
          <Row className="form-group row-align"> 
          <Label style={{textAlign:'center'}}>{"Course : "+this.props.header.course}</Label>
          </Row>
          <Row className="form-group row-align"> 
          <Label style={{textAlign:'center'}}>{"Regulation : "+this.props.header.regulation}</Label>
          </Row>
          <Row className="form-group">
          <Col md={3} className="offset-md-1">
          <Label >{"Time :"+this.props.header.time}</Label>
          </Col>
          <Col md={2} className="offset-md-5">
          <Label >{"Marks : "+this.props.header.marks}</Label>
          </Col>
          </Row>

            <Row className="form-group row-align"> 
            <Label style={{textAlign:'center'}}><b>PART-A</b></Label> 
            <Label>({this.props.totala})</Label> 
            </Row>
            {
            this.props.sab.qp.map((x,id) => {
            return(
            <div>
            <Row>
            <Col md={1} className="offset-md-1">
            {this.props.sab.qp[id].subqp.length!==0?<Label style={{textAlign:'right'}}>
            {1+id+"."+this.props.csub[0]+")"}</Label>
            :<Label style={{textAlign:'right'}}>{1+id}</Label>}
            
            </Col>
           <Col md={8}>
            <Label><Math ques={x.question}/></Label>
            
            <img style={{padding:'15px',paddingLeft:'55px',alignItems:'center',justifyContent:'center'}}height="200px" src={x.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({x.mark})</Label>
            </Col>
            </Row>
            
            
            {this.props.sab.qp[id].subqp.map((xb,subid)=>{
            return(
            <Row>
            <Col md={1} className="offset-md-1">
            <Label>{1+id+"."+this.props.csub[subid+1]+")"}</Label>
            </Col>
            <Col md={8}>
            
            <Label><Math ques={xb.question}/></Label>
            <img style={{padding:'15px',paddingLeft:'55px',alignItems:'center',justifyContent:'center'}}height="200px" src={xb.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({xb.mark})</Label>
            </Col>
            </Row>
            );
            })}
            
            </div>
            );
            })
            }
            </div>
            <div>
            <Row className="form-group row-align">
            <Label style={{textAlign:'center'}} ><b>PART-B</b></Label> 
            <Label>({this.props.totalb})</Label> 
            </Row>
            {
            this.props.sb.qp.map((x,id) => {
            return(
            <div>
            <Row>
            <Col md={1} className="offset-md-1">
            {this.props.sb.qp[id].subqp.length!==0?<Label>
            {this.props.id_a+1+id+"."+this.props.csub[0]+")"}</Label>
            :<Label>{this.props.id_a+1+id}</Label>}
            
            </Col>
            <Col md={8}>
            
            <Label><Math ques={x.question}/></Label>
            <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={x.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({x.mark})</Label>
            </Col>
            </Row>
            
            {this.props.sb.qp[id].subqp.map((xb,subid)=>{
            return(
            <Row>
            <Col md={1} className="offset-md-1">
            <Label>{this.props.id_a+1+id+"."+this.props.csub[subid+1]+")"}</Label>
            </Col>
            <Col md={8}>
            
            <Label><Math ques={xb.question}/></Label>
            <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={xb.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({xb.mark})</Label>
            </Col>
            </Row>
            );
            })}
            
            </div>
            );
            })
            }
            </div>
            <div>
            <Row className="form-group row-align">
            <Label style={{textAlign:'center'}}><b>PART-C</b></Label>
            <Label>({this.props.totalc})</Label>
            
            </Row>
            {
            this.props.sc.map((x,id) => {
            return(
            <div>
            <Row>
            <Col md={1} className="offset-md-1">
            {this.props.sc[id].subqp.length!==0?<Label>
            {this.props.idb+1+id+"."+this.props.csub[0]+")"}</Label>
            :<Label>{this.props.idb+1+id}</Label>}
            
            </Col>
            <Col md={8}>
            
            <Label><Math ques={x.question}/></Label>
            <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={x.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({x.mark})</Label>
            </Col>
            </Row>
            
            {this.props.sc[id].subqp.map((xb,subid)=>{
            return(
            <Row>
            <Col md={1} className="offset-md-1">
            <Label>{this.props.idb+1+id+"."+this.props.csub[subid+1]+")"}</Label>
            </Col>
            <Col md={8}>
            
            <Label><Math ques={xb.question}/></Label>
            <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={xb.imagePreviewUrl} />
            </Col>
            <Col md={1}>
            <Label>({xb.mark})</Label>
            </Col>
            </Row>
            );
            })}
            
            </div>
            );
            })
            }
            </div>
            </PDFExport>
            </div>
            
            
            <Button onClick={this.exportPDFWithComponent} style={{alignItems:'center'}}>Generate PDF</Button>
            </div>
            
            
        )
    }
}
export default mydoc;