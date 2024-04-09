// import React from "react";
import hero_img from "../../assets/images/hero-img'.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero__cards">
          <div className="hero__card">
            <h1>Поставщик Дальнего Востока</h1>
            <p>
              Наши клиенты получают полный спектр услуг по работе с Китаем.
              Начиная с подбора производителя заканчивая доставкой товара до
              двери. Настолько прозрачных сделок с Китаем вы еще не
              осуществляли.
            </p>
            <a href="#">Узнать больше</a>
          </div>
          <div className="hero__card">
            <img src={hero_img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
