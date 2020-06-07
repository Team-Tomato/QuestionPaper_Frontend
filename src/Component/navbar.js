import React, { Component } from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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

  //Why did we added below lines ? (Ask Kishore)

  // activeRoute(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // }

  render() {
    return (
      <div>
        <Navbar expand="md" className='TopNavbar' light>
          <NavbarBrand href="/" className='TopNavbarBrand' >
            <img src={require("../../public/logo40.png")} alt=""/>
            Team Tomato
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar pills>
              {/* className="mr-auto" */}
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to='/searchQP/' activeClassName="active" exact path="/searchQP/" activeStyle={{backgroundColor: 'violet', color: 'white'}}> Search QP </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to="/books/" activeClassName="active" exact path="/books/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Search Book</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to="/templateQP/" activeClassName="active" exact path="/templateQP/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Template</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to="/contributors/" activeClassName="active" exact path="/contributors/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Contributors</NavLink>
              </NavItem >
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to="/projects/" activeClassName="active" exact path="/projects/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} className='NavbarItem' to="/contact/" activeClassName="active" exact path="/contact/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Header;