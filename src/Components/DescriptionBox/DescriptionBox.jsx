import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of goods or services. It serves as a virtual
          storefront, allowing businesses to showcase products, manage
          transactions, and enable customers to make purchases over the
          internet. These websites typically include features like shopping
          carts, secure payment options, and user-friendly interfaces, providing
          a convenient and efficient online shopping experience.
        </p>
        <p>
          E-commerce websites typically display images, prices, and products,
          creating a visually appealing showcase for users. This presentation
          enables customers to easily assess product details and make informed
          purchasing decisions, contributing to a seamless and efficient
          shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
