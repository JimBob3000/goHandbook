import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleChange = () => {
        setOpen(!open)
    }

    return (  
        <nav id="nav" className="sticky top-0 h-[80px] z-50 flex border-b-2 flex-wrap items-center bg-white shadow-md shadow-slate-900/5 transition duration-500 px-6">
            <button className="lg:hidden mobileMenuToggle" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon className={`w-[14px] ${open ? "text-xl" : ""}`}  icon={open ? faXmark : faBars}/>
            </button>

            <div className="flex sm:mx-auto flex-col text-center py-5 md:py-2 px-6">
                <Link to="/" className="font-extrabold tracking-widest text-2xl text-slate-800 ">GOLANG HANDBOOK</Link>
                <a href="https://github.com/JimBob3000" className="lg:block hidden pb-1 text-sm text-slate-500 transition duration-500 hover:text-slate-700">By James Elliott</a>
            </div>
            <div className="lg:hidden">
            </div>

            <Menu open={open} onClick={handleChange}  />
        </nav>
    );
}
 
export default Navbar;