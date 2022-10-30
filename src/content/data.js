import product1thumbnail from "../images/image-product-1-thumbnail.jpg";
import product1 from "../images/image-product-1.jpg";
import product2thumbnail from "../images/image-product-2-thumbnail.jpg";
import product2 from "../images/image-product-2.jpg";
import product3thumbnail from "../images/image-product-3-thumbnail.jpg";
import product3 from "../images/image-product-3.jpg";
import product4thumbnail from "../images/image-product-4-thumbnail.jpg";
import product4 from "../images/image-product-4.jpg";

export const products = {
  id: Math.floor(Math.random() * Date.now()),
  title: " Fall Limited Edition Sneakers",
  text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  subtitle: "Sneaker Company",
  discPrice: "$125.00",
  ogPrice: "$250.00",
  discount: "50%",
  images: [
    {
      id: Math.floor(Math.random() * Date.now()),
      jpgTub: product1thumbnail,
      jpg: product1,
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      jpgTub: product2thumbnail,
      jpg: product2,
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      jpgTub: product3thumbnail,
      jpg: product3,
    },
    {
      id: Math.floor(Math.random() * Date.now()),
      jpgTub: product4thumbnail,
      jpg: product4,
    },
  ],
};

export const cartProduct = async (id, title, discPrice, countItem, productImag) => {
  return {
    id: id,
    title: title,
    discPrice: discPrice,
    HowManyItem: countItem,
    images: productImag
  }
}