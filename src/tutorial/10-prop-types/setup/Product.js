import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url; // if image is undefined url will be false

  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "no name"} />
      <h4>{name}</h4>
      <p>${price || 0.0}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "no name",
//   price: 0,
//   image: defaultImage,
// };

export default Product;
