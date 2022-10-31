import { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import deleteBtn from "../images/icon-delete.svg";
import menu from '../images/icon-menu.svg';
import close from "../images/icon-close copy 2.svg";


const Navbar = ({isCartProduct, setIsCartProduct}) => {
  const [open, setOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  

  
  const deleteCart = (id, title) => {
    if(window.confirm(`Are you sure you want to remove ${title}`)) {
      const updateCart = isCartProduct.filter(cart => cart.id !== id) 
      setIsCartProduct(updateCart)
    }

  }
  
  return (
      <div className="nav-contents">
        <div className="nav-logoLink">
          <div className="logo">
            <img src={menu} className='menu' alt="" onClick={() => setIsMenu(!isMenu)} />
            <img src={logo} alt="" />
          </div>
            {isMenu && 
            <>
            <span className="backgroundNavM" /><img src={close} className='close' alt="" onClick={() => setIsMenu(!isMenu)} />
          <ul className="navLinksM">
              <li>
                <a>Collections</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul></>
          }
          <ul className="navLinks">
              <li>
                <a>Collections</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
        </div>

        <div className="nav-cartLog">
          <div style={{position:'relative'}}>

          <img
            src={cart}
            alt=""
            className="cartIcon"
            onClick={() => setOpen(!open)}
            />
            {isCartProduct.length > 0 && 
          <span className="cartNumber">{isCartProduct.length}</span>
            }
            </div>
          <img src={avatar} alt="" className="avatarIcon" />
          {open && (
            <div className="cart-container">
              <div className="cartName">
                <p>Cart</p>
              </div>
              {!isCartProduct.length == 0 ? (

                <>
                {isCartProduct?.map((cart) => (

                  <><div className="cartDetails">
                    <div className="cartProduct_con">
                      <img className="cartProduct" src={cart?.images} alt="" />
                      <div className="cartProduct_text">
                        <p className="cardTitle">{cart?.title}</p>
                        <p className="cardPriceP">
                          {`${cart?.discPrice} * ${cart?.HowManyItem}`} <span>{cart?.discPrice.replace('$','') * cart?.HowManyItem}</span>
                        </p>
                      </div>
                    </div>
                    <button className="cartDlt">
                      <img src={deleteBtn} alt="" onClick={() => deleteCart(cart?.id, cart?.title)}/>
                    </button>
                  </div><button className="checkOut">Check out</button></>
                  ))}
                </>
                  ):(
                    <div className="cartEmpty">Your cart is empty</div>
                  )}
              </div>
              )}
        </div>
      </div>
  );
};

export default Navbar;
