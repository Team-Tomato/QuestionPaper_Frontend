import React, { Component } from 'react';
import img1 from '../images/tomatoo.jpg';
import img2 from '../images/logo.jpg';
import img3 from '../images/assist.png';
import img4 from '../images/movie recommand.jpg';
import img5 from '../images/thoughts of people.jpg';
class Project extends Component {
  render() {
    return (
      <div className="containers-fluid d-flex .justify content-md-center">
                <div className="row">
                <div className="col-md-4">
                    <p className="pr-md-5">
                    <p className="pl-md-5">
                        <div className='card protext-center' style={{width: '200px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='project-Title'>Team Tomato</h5>
                            <div  className='overflow'>
                                <img className="card-img-top" src={img1} alt='Projectimage ' width="200" height="220"></img>
                            </div>
                           <p className='card-protext text-secondary'>
                           Team which is determined to spread the love of open source (oss)
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/" role="text">Team Tomato site</a>
                                <p className='card-protext text-secondary'>
                                Top languages used-Javascript,Python,HTML
                                </p>
                            </div>
                        </div>
                        </p>
                        </p>
                    </div>
                   <div className="col-md-4">
                    <p className="pr-md-5">
                    <p className= "pl-md-5">
                        <div className='card protext-center' style={{width: '200px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='project-Title'>One click for CEG</h5>
                            <div  className='overflow'>
                                <img className="card-img-top" src={img2} alt='Projectimage' width="200" height="220"></img>
                            </div>
                           <p className='card-protext text-secondary'>
                           It is an extension which directs to all CEG related websites 
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/oneClick-chrome-extension" role="text">Chrome Extension site</a>
                                <p className='card-protext text-secondary'>
                                Top languages used are-Javascript and HTML
                                </p>
                            </div>
                        </div>
                        </p>
                        </p>
                        </div>
                    <div className="col-md-4">
                    <p className="pr-md-5">
                        <p className="pl-md-5">
                        <div className='card protext-center' style={{width: '200px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='project-Title'>Team Tomato Action</h5>
                            <div  className='overflow'>
                                <img className="card-img-top" src={img3} alt='Projectimage' width="200" height="220"></img>
                            </div>
                           <p className='card-protext text-secondary'>
                           Google Assistant action for Team Tomato
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/GAction_TeamTomato" role="text">Assistant site</a>
                                <p className='card-protext text-secondary'>
                                This is built with the help of either C++ or Python
                                </p>
                            </div>
                        </div>
                        </p>
                        </p>
                        </div>
                        <div className="col-md-6">
                        <div className="float-md-right">
                    <p className="pr-md-5">
                    <p className="pl-md-5">
                        <div className='card protext-center' style={{width: '200px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='project-Title'>Movie-recommandation Action</h5>
                            <div  className='overflow'>
                                <img className="card-img-top" src={img4} alt='Projectimage' width="200" height="220"></img>
                            </div>
                           <p className='card-protext text-secondary'>
                                   ----- 
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/Movie_Recommendation_Backend" role="text">Movie recommandation site</a>
                                <p className='card-protext text-secondary'>
                                Done using Python
                                </p>
                            </div>
                        </div>
                        </p>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="float-md-left">
                        <p className="pr-md-5">
                            <p className="pl-md-5">
                            <div className='card protext-center' style={{width: '200px'}}>
                                <div className='card-Body text-dark'>
                                    <h5 className='project-Title'>Thoughts of people</h5>
                                    <div className='overflow'>
                                        <img className="card-img-top" src={img5} alt='Projectimage' width="200" height="220"></img>
                                    </div>
                                    <p className='card-protext text-secondary'>
                                        -------
                                        </p>
                                        <a class="text-primary" href="" role="text">People thoughts</a>
                                        <p className='card-protext text-secondary'>
                                            --------
                                            </p>  
                                    </div>
                                </div>
                        </p>
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
        );
    }
}
      
export default Project;