import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import navUser from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
  const {user} = use(AuthContext)
    return (
      <nav className="flex justify-between items-center mt-5">
        <div>{ user && user.email}</div>
        <ul className="flex items-center gap-3 text-accent">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/career"}>Career</NavLink>
          </li>
        </ul>
        <div className="flex gap-2.5 items-center">
          <img src={navUser} alt="User" />
          <Link
            to={"/auth/login"}
            className="btn bg-primary px-10 py-2 font-semibold text-white text-xl"
          >
            Login
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;