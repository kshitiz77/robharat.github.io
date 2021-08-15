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
    const [anchorE1, setAnchorE1] = useState(null);

    const handleClick = (event) =>{
        setAnchorE1(event.target)
    }

    const handleClose = () =>{
        setAnchorE1(null)
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
                        <Menu  id="dropdown-menu" anchorE1={anchorE1} keepMounted open={Boolean(anchorE1)} onClose={handleClose}>
                        <MenuItem onClick={handleClose}><Link to="/login" className="header__signUp">Sign Up</Link> </MenuItem>
                        <MenuItem onClick={handleClose}>Vendor Form</MenuItem>
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
