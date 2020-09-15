import React from 'react';
import logo from '../styles/logo1.png';

const Nav = () => {
    return (
        <nav class="navbar navbar-dark bg-dark-custom">
            <div class="navbar-brand-custom mx-auto">
                <img src={logo} width="95" height="95" class="d-inline-block align-top" alt="img-logo" />
            </div>
        </nav>
    )
}

export default Nav