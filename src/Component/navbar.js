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
import '../style.css'

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
                <Navbar expand="md" className='TopNavbar'>
                    <NavbarBrand href="/" className='TopNavbarBrand'>Team Tomato</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className='NavbarItem' href='/searchQP/'>Search QP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='NavbarItem' href="/books/">Search Book</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='NavbarItem' href="/templateQP/">Template</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='NavbarItem' href="/projects/">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='NavbarItem' href="/contributors/">Contributors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='NavbarItem' href="/contact/">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;