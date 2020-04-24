import React, { Component } from 'react';
import './App.css';
import './style.css';
class App extends Component {
  send()
  {
    alert("Thank you for your response.We will contact you as soon as possible!!")
  }
  render(){
  return (
    <div>
      <div className="header">
        <h1>We wish to hear from you!</h1>
        <p className="sansserif" style={{color:"#D3D3D3"}}>Have a question?Get in touch with us.We're here for you</p>
       </div>
        
        <div className="box" style={{padding:"100px"}}>
        <h2 className="serif" style={{color:"#000080"}}>Let's get Together</h2>
          <h4 className="sansserif" style={{color:"#E75480"}} > Stop by and say Hi to teamtomato.oss@gmail.com</h4>
          </div>

          <div className="box" >
            <form style={{padding:"5px"}}>
              
            <h2 className="serif" style={{color:"#654321"}}>Give us a shout!!</h2>
            <h4 className="sanserif" style={{color:"A9A9A9"}}>Use the quick form below to drop us a message</h4>
            
            <div className="center">
              
            <div style={{textAlign:"left"}}>
            <label className="sanserif" style={{fontWeight:"bold"}}>Name</label><br/><br/>
            <input type='text' size="28"/><br/><br/>
            <label className="sanserif" style={{fontWeight:"bold"}}>Email</label><br/><br/>
            <input type='text' size="28"/><br/><br/>
            
            <label className="sanserif" style={{fontWeight:"bold"}}>Message</label><br/><br/>
            <textarea rows="5" cols="30"/><br/><br/>
            <button className="buttonstyle"  onClick={this.send}>Send</button>
            </div>
            </div>
            </form>
            </div>
            
     </div> 
      
  );}
}

export default App;
