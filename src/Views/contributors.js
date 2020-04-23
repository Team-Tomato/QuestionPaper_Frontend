import React,{Component} from 'react';
import './App.css';
import {Card,CardImg,CardTitle,CardBody,Container,CardDeck,Row,Col,CardFooter} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class contributors extends Component {

  constructor()
   {
      super();
      this.state = {
          repo : null,
          fetched : false,
          contributor : [],
          user : [],
          login : [] 
      }
   }
   
   async componentDidMount()
   {
    var output;
    output = await (await fetch('https://api.github.com/orgs/Team-Tomato/repos')).json()
    this.setState({repo : output})
    var person;
    for(var i=0;i<this.state.repo.length;i++)
          {

           var url = this.state.repo[i].contributors_url
       person = await (await fetch(url)).json() 
       this.state.user.push(person)
    }
    for(var i=0;i<this.state.user.length;i++)
          {
            for(var j=0;j<this.state.user[i].length;j++)
            {
                if(!this.state.login.includes(this.state.user[i][j].login))
                {
            this.state.contributor.push(this.state.user[i][j])
            this.state.login.push(this.state.user[i][j].login)
             }
            }
          } 
          this.setState({fetched : true})
   }
    
  render()
  {
    return(
  <div> 
    <div className="container-fluid d-flex justify-content-center">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
         { this.state.contributor.map((res,index)=>(
           <div className="col">
              <a href={'https://github.com/'+res.login} className="a" target="_blank" style={{textDecoration:'none'}} >
                <div key={index} className="card" style={{textDecoration:'none'}}>
                  <img src={'https://avatars2.githubusercontent.com/u/' +res.id+ '?v=4'} className="profile-align" style={{textDecoration:'none'}} />
                    <div className="card-body text-dark">
                       <h2 className="card-title" style={{textDecoration:'none'}}>{res.login}</h2>
                    </div>
                </div>
              </a>
             </div>
               ))} 
        </div>
    </div>
  </div>
      )
        }
      }


export default contributors;