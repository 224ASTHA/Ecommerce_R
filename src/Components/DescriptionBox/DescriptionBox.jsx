import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
           <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Description</div>
              <div className="descriptionbox-nav-box">Reviews (122)</div>
           </div>
           <div className="descriptionbox-description">
            <p>Our e-commerce site offers a seamless online shopping experience with a wide range of products to suit your every need. 
                From the latest tech gadgets to trendy fashion and everyday essentials, we bring you high-quality products at competitive prices.
                 Enjoy a user-friendly interface, secure payment options, fast delivery, and 24/7 customer support.
                  Shop conveniently from anywhere and discover exclusive deals and discounts tailored just for you .</p>
            <p>Discover a world of convenience and variety on our e-commerce platform! From everyday essentials to luxury items,
                 we bring top-quality products right to your doorstep. Enjoy easy navigation, secure payments, 
                 and quick delivery, all while exploring great deals and offers. Shop smarter, faster, and better with us</p>      
           </div>
        </div>
    )
}

export default DescriptionBox;