import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../components/Buttons';
import logo from '../../shirt logo icon.svg';


export default class Navbar extends Component {
    render() {
        return(
            <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" width="50" height="50" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>

   
                {/* Login and Cart Links aligned to right of navbar */}
                <div className = "ml-auto row">

                <Link to="/login" className="nav-item text-inline m-auto my-auto px-2">
                    <ButtonContainer>
                        Login
                    </ButtonContainer>
                </Link>

                <Link to="/cart" className="nav-item text-inline m-auto my-auto px-2">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Cart!
                    </ButtonContainer>
                </Link>
                </div>


            </NavWrap>
        
        )
    }
}


const NavWrap = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform:capitalize;
    }
`;

