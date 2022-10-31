import { useState } from "react";
import { products, cartProduct } from "../content/data";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart copy.svg";
import { ProductPrev } from "./";

const Home = ({ isCartProduct, setIsCartProduct }) => {
  const [productClicked, setProductClicked] = useState("");
  const [productFullScreen, setProductFullScreen] = useState("");
  const [cartItem, setCartItem] = useState(1);

  const itemMinus = () => {
    setCartItem((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };
  const itemPlus = () => {
    setCartItem((prevQty) => prevQty + 1);
  };

  const addCart = (id, title, discPrice, countItem, productImag) => {
    cartProduct(id, title, discPrice, countItem, productImag).then((cartP) => {
      setIsCartProduct([cartP, ...isCartProduct]);
    });
  };

  return (
    <>
      <div className="home-contents">
        <ProductPrev
          productClicked={productClicked}
          setProductClicked={setProductClicked}
          productFullScreen={productFullScreen}
          setProductFullScreen={setProductFullScreen}
          products={products.images}
        />
        <div className="product-details">
          <h4 className="subtitle">{products.subtitle}</h4>
          <h1 className="title">{products.title}</h1>
          <p className="detailsText">{products.text}</p>
          <div className="product-rate">
            <div className="productPrice">
              <h6 className="discPrice">{products.discPrice}</h6>
              <span className="discount">{products.discount}</span>
            </div>
            <p className="ogPrice">{products.ogPrice}</p>
          </div>
          <div className="product-porches">
            <span className="product-count">
              <img src={minus} onClick={itemMinus} alt="" />
              <p>{cartItem}</p>
              <img src={plus} alt="" onClick={itemPlus} />
            </span>
            <span className="add-to-cart" 
            onClick={() =>
              addCart(
                products.id,
                products.title,
                products.discPrice,
                cartItem,
                products.images[0].jpgTub
              )
            }>
              <img src={cart} alt="" />
              <p
                
              >
                Add to cart
              </p>
            </span>
          </div>
        </div>
      </div>

      {productFullScreen && (
        <div className="status-lightBox">
          <ProductPrev
            productClicked={productClicked}
            setProductClicked={setProductClicked}
            products={products.images}
          />
        </div>
      )}
    </>
  );
};

export default Home;
