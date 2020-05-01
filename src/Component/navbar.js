import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../Styles/style.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
      }
     
    render() {
        return (
            <div>
                
                <Navbar expand="md" className='TopNavbar' light>
                    <NavbarBrand href="/" className='TopNavbarBrand' >Team Tomato</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto"  navbar pills>
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem' to='/searchQP/' activeClassName="active" exact path="/searchQP/">
                                    Search QP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem' to="/books/" activeClassName="active" exact path="/books/">Search Book</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem'  to="/templateQP/" activeClassName="active" exact path="/templateQP/">Template</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem' to="/contributors/" activeClassName="active" exact path="/contributors/">Contributors</NavLink>
                            </NavItem >
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem' to="/projects/" activeClassName="active" exact path="/projects/">Projects</NavLink>
                            </NavItem>
    
                            <NavItem>
                                <NavLink tag={RRNavLink} className='NavbarItem' to="/contact/" activeClassName="active" exact path="/contact/">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        
                    </Collapse>
                </Navbar>
               
            </div>
        );
    }
}

export default Header;