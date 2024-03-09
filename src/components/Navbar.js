import React,{useState} from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click)
    const [color,setColor]=useState(false)
    const changeColor=()=>{
        (window.scrollY>=100)?(setColor(true)):(setColor(false))
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
        <Link  to="/">
            <h1 className='navbar-hover'>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link className='navbar-hover' to="/">Home</Link>
            </li>
            <li>
                <Link className='navbar-hover'  to="/project">Project</Link>
            </li>
            <li>
                <Link className='navbar-hover'  to="/about">About</Link>
            </li>
            <li>
                <Link className='navbar-hover'  to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
