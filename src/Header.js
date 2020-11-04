import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';
function Header() {
  const [{basket,user}] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
   
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionsLineOne">Hello {!user ? "Guest" : user.email}</span>
            <span className="header__optionsLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/orders" className="header_link">
          <div className="header__option">
            <span className="header__optionsLineOne">Returns</span>
            <span className="header__optionsLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header__option">
            <span className="header__optionsLineOne">Your</span>
            <span className="header__optionsLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header_link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionsLineTwo header__basketCount">{basket.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
