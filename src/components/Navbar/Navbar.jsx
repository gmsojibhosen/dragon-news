import React from 'react';
import { NavLink } from 'react-router';
import navUser from '../../assets/user.png'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mt-5'>
            <div></div>
            <ul className='flex items-center gap-3 text-accent'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/career'}>Career</NavLink></li>
            </ul>
            <div className='flex gap-2.5 items-center'>
                <img src={navUser} alt="User" />
                <button className='btn bg-primary px-10 py-2 font-semibold text-white text-xl'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;