import React from "react";

const Contact = () => {
  let data = [
    {
      id: 1,
      img: "https://i.postimg.cc/d0fk3xp2/con-1.png",
      title: "Росатом",
      text: "Корпорация атомной энергии",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/mZCzZVw9/con-2.png",
      title: "Газпром",
      text: "Энергетическая компания",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/fTs3VX2r/con-3.png",
      title: "Роснефть",
      text: "Нефтегазовая компания",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/g01jm6L4/con-4.png",
      title: "Роскосмос",
      text: "Корпорация в космической отрасли",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/xCHCCTKQ/con-5.png",
      title: "Лукойл",
      text: "Нефтяная компания",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/2yrzSdkd/con-6.png",
      title: "Интер РАО",
      text: "Энергетическая компания",
    },
    {
      id: 7,
      img: "https://i.postimg.cc/FsFrtxnN/con-7.png",
      title: "Ростех",
      text: "Промышленная корпорация",
    },
    {
      id: 8,
      img: "https://i.postimg.cc/C5hggF7m/con-8.png",
      title: "Банк ВТБ",
      text: "Коммерческий банк ",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="contact__card">
      <div className="img">
        <img src={el.img} alt="img" />
      </div>
      <h3>{el.title}</h3>
      <p>{el.text}</p>
    </div>
  ));
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h1>Нам доверяют</h1>
          <div className="contact__cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
