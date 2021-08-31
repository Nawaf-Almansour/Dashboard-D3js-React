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
        <Link to={route}>
    {title}
        </Link>
    )
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
                    <Nav className="mr-auto" navbar>
                        <NavItem className={"port-navbar-item"}>
                            <BsNavLink route={"/"} title={"Home"}/>
                        </NavItem>
                        <NavItem>
                            <BsNavLink route={"/about"} title={"About"}/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <NavLink href="https://github.com/">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;