import React,{useState} from 'react'
import "./NavbarStyles.css"
import { Link,NavLink } from 'react-router-dom'
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
                <NavLink className={({isActive})=>`${isActive? "lightgrey":"navbar-hover"} `} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>`${isActive? "lightgrey":"navbar-hover"} `}  to="/project">Project</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>`${isActive? "lightgrey":"navbar-hover"} `}  to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>`${isActive? "lightgrey":"navbar-hover"} `}  to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
