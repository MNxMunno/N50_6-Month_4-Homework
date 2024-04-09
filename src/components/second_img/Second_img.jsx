import React from "react";
import img from "../../assets/images/second_img.png";

const Second_img = () => {
  return (
    <section className="second_img-section">
      <div className="container">
        <img src={img} alt="img" />
      </div>
    </section>
  );
};

export default Second_img;
