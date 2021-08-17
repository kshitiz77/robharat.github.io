import React, {useState} from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import DropDownIcon from "@material-ui/icons/ArrowDropDown"
import  Menu  from '@material-ui/core/Menu'
import  MenuItem  from '@material-ui/core/MenuItem'
import SearchIcon from "@material-ui/icons/Search";
import HamburgerIcon from "@material-ui/icons/Menu"
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider'

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [{ cart }] = useStateValue();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) =>{
        setAnchorEl(event.target)
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="img/logo.png" alt=""></img>
            </Link>
            {/* Search box  */}
            <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
            </div>
            {/* 2 Links */}
            <div className={showMenu ? "mobile__nav" : "header__nav"}>
                {/* 1st Link */}
                <div className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Hello</span>
                        <span className="header__optionTwo" >
                        <Link to="/login" className="header__link">Sign In </Link>   
                        <DropDownIcon onClick={handleClick} />
                        </span>
                        <Menu className="header__menu" id="dropdown-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem  onClick={handleClose}><Link to="/register" className="header__signUp">Sign Up</Link> </MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/register" className="header__signUp">Vendor Form</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
            
                {/* 2nd Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3nd Link */}
            {/* Basket icon with number */}
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Numbers of items in the basket */}
                        <span className="header__optionTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
            <div className="hamburger__nav">
                <HamburgerIcon onClick={() => setShowMenu(!showMenu)}/>
            </div>
        </nav>
    )
}

export default Header
