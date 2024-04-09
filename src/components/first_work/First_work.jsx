// import React, {useState} from "react";

const First_work = () => {
  let data = [
    {
      id: 1,
      img: "https://i.postimg.cc/TPbMsVKJ/work-imgg.png",
      title: "Поиск производителей по товару",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },

    {
      id: 2,
      img: "https://i.postimg.cc/gcHLx5Y8/work-imgg-2.png",
      title: "Поиск конкретного производителя",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },

    {
      id: 3,
      img: "https://i.postimg.cc/KYYh51Lm/work-imgg-3.png",
      title: "Доставка образцовтоваров",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="img__icon">
        <img src={el.img} alt="img" />
      </div>
      <h3>{el.title}</h3>
      <p>{el.text}</p>
    </div>
  ));

  return (
    <section className="first_work-section">
      <div className="container">
        <div className="first_work__cards">{card}</div>
      </div>
    </section>
  );
};

export default First_work;
