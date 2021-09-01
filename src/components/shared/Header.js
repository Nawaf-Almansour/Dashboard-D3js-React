import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const BsNavLink = (props) => {
    const {route, title } = props;
    return (
        <Link
            className='navbar__item'
            to={route}>
    {title}
        </Link>

);
}

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                className={`port-navbar port-default absolute`}
                color="transparent" dark expand="md">
                <NavbarBrand className={"port-navbar-brand"} href="/">Nawaf</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar mr-auto" navbar>
                        <NavItem  className='port-navbar-item navbar__title navbar__item'>
                            <BsNavLink route={"/"} title={"Home"}/>
                        </NavItem>
                        <NavItem  className='port-navbar-item navbar__title navbar__item'>
                            <BsNavLink route={"/about"} title={"About"}/>
                        </NavItem>
                        <NavItem  className='port-navbar-item navbar__title navbar__item'>
                            <NavLink href="https://github.com/Nawaf-Almansour/Dashboard-D3js-React">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;