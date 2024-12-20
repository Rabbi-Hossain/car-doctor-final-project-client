import { NavLink } from "react-router";
import logo1 from '../assets/logo.svg'
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {

    const { user, LogOut } = useContext(AuthContext)
    console.log(user)


    const NavbarLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }



    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>

        {user?.email ? <>
            <li><NavLink to='/mybooking'>MyBooking</NavLink></li>
            <button onClick={NavbarLogOut}>LogOut</button> 
        </> : <li><NavLink to='/login'>Login</NavLink></li>}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" text-xl"><img src={logo1} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    <p className="flex items-center">
                        {
                            user?.email ? <>
                                <p className="mr-4">{user.displayName}</p>
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </>
                                :
                                <RxAvatar className="text-4xl" />
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;