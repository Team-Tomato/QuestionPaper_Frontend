import React,{Component} from 'react';
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.css'


class Project extends Component {
  state={
    query:'',
    loading:true,
    title:[],
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
      title:[]
    });

  };


async search(query)
{
  const url="https://www.googleapis.com/books/v1/volumes?q="+query
    const response=await fetch(url)
    const data=await response.json();
    this.setState({person:data})
    for(var i=0;i<10;i++)
    {
      var authored=this.state.person.items[i].volumeInfo;
      this.state.title.push(authored)
      this.setState({loading:false})
    }
}

  handleLogin=e=>
  {
    const query=this.state.query
    this.search(query)
    
  }

  render()
  {
    return(
      <div>
      <div className="container">
      <div className="row row-align">
      <input type="text" placeholder="Search" className="offset-sm-1 input col-sm-7" onChange={this.onChange}/>
      <button type="button" className="key col-sm-3" onClick={this.handleLogin}>Submit</button>
      </div>
      </div>
        {this.state.loading||!this.state.query||!this.state.title?(
        <div></div>
        ):(
          <div className="container">
          <div className="row">
         {
          this.state.title.map((images,index)=>(
            <div key={index} className="col-12 col-sm-3">
              <div className=" card-deck">
               <div className="card">
                
                 <img className=" img-align" src={images.imageLinks.thumbnail} alt="Card image cap"/>
                 <header  className="header">{images.authors}</header>
                  <footer  className="footer">{images.title}</footer>
                  <a href="#"><i className="fa fa-download a"></i></a>
                </div>
             </div>
           </div>
         ))}
       </div>                 
     </div>
      )}
      
      </div>
    )
  }
}

export default Project;

