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
                <div className="row" style={{width: '90rem'}}>
                <div className="col-md-4">
                    <p className="pr-md-5">
                    <p className= "pl-md-5">
                        <div className='card text1-center' style={{width: '300px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='card-Title'>Team Tomato</h5>
                            <div  className='overflow'>
                                <img src={img1} alt='Image 1' className="card-img-top" width="200" height="220"></img>
                            </div>
                           <p className='card-text1 text-secondary'>
                           Team which is determined to spread the love of open source (oss)
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/" role="text">Team Tomato site</a>
                                <p className='card-text1 text-secondary'>
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
                        <div className='card text1-center' style={{width: '300px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='card-Title'>One click for CEG</h5>
                            <div  className='overflow'>
                                <img src={img2} alt='Image 2' className="card-img-top" width="200" height="220"></img>
                            </div>
                           <p className='card-text1 text-secondary'>
                           It is an extension which directs to all CEG related websites 
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/oneClick-chrome-extension" role="text">Chrome Extension site</a>
                                <p className='card-text1 text-secondary'>
                                Top languages used are-Javascript,HTML
                                </p>
                            </div>
                        </div>
                        </p>
                        </p>
                        </div>
                    <div className="col-md-4">
                    <p className="pr-md-5">
                        <p className= "pl-md-5">
                        <div className='card text1-center' style={{width: '300px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='card-Title'>Team Tomato Action</h5>
                            <div  className='overflow'>
                                <img src={img3} alt='Image 3' className="card-img-top" width="200" height="220"></img>
                            </div>
                           <p className='card-text1 text-secondary'>
                           Google Assistant action for Team Tomato
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/GAction_TeamTomato" role="text">Assistant site</a>
                                <p className='card-text1 text-secondary'>
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
                        <div className='card text1-center' style={{width: '300px'}}>
                        <div className='card-Body text-dark'>
                                <h5 className='card-Title'>Movie-recommandation Action</h5>
                            <div  className='overflow'>
                                <img src={img4} alt='Image 4' className="card-img-top" width="200" height="220"></img>
                            </div>
                           <p className='card-text1 text-secondary'>
                                   ----- 
                                </p>
                                <a class="text-primary" href="https://github.com/Team-Tomato/Movie_Recommendation_Backend" role="text">Movie recommandation site</a>
                                <p className='card-text1 text-secondary'>
                                Done using Python
                                </p>
                            </div>
                        </div>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="float-md-left">
                        <p className="pr-md-5">
                            <p className="pl-md-5">
                            <div className='card text1-center' style={{width: '300px'}}>
                                <div className='card-Body text-dark'>
                                    <h5 className='card-Title'>Thoughts of people</h5>
                                    <div className='overflow'>
                                        <img src={img5} alt='Image 5' className="card-img-top" width="200" height="220"></img>
                                    </div>
                                    <p className='card-text1 text-secondary'>
                                        -------
                                        </p>
                                        <a class="text-primary" href="" role="text">People thoughts</a>
                                        <p className='card-text1 text-secondary'>
                                            ------
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