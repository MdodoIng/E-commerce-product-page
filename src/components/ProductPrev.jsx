import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../content/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPrev = ({
  productClicked,
  setProductClicked,
  setProductFullScreen,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const clickedProduct = id;

  const handleClick = (e) => {
    setProductFullScreen(e);
    navigate(`/${e}`);
  };
  const product = products.images;

  useEffect(() => {
    if (!productClicked) {
      setProductClicked(product[0].id);
      console.log(product[0].id);
    }
  }, [product]);

  const closeBtn = () => {
    setProductFullScreen("");
    navigate("/");
  };

  return (
    <div className={id ? "status-lightBox" : "contents"}>
      <div className={clickedProduct ? "lightBox productPics" : "productPics"}>
        <div
          className={
            clickedProduct ? "product-viewer lightBoxP" : "product-viewer"
          }
        >
          {clickedProduct ? (
            <>
              <span onClick={closeBtn} className="lightBox-close " />
              <span onClick={""} className="lightBox-prev" />
              <span className="lightBox-next" />
            </>
          ) : (
            <>
              <span className="lightBox-prev none" />
              <span className="lightBox-next none" />
            </>
          )}
          <Carousel
          className="flex"
            thumbWidth={110}
            onClickItem={handleClick}
            showStatus={false}
          >
            {product.map((i) => (
              <img
                onClick={handleClick}
                id={i.id}
                src={i?.jpg}
                alt=""
                className="productBig"
              />
            ))}
          </Carousel>
          <Carousel
          className="none"
            thumbWidth={110}
            showStatus={false}
          >
            {product.map((i) => (
              <img
                id={i.id}
                src={i?.jpg}
                alt=""
                className="productBig"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductPrev;
