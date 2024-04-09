// import React from "react";

const Second__work = () => {
  let data = [
    {
      id: 1,
      img: "https://i.postimg.cc/CLVNTMDj/work-img.png",
      title: "Станки и оборудование",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "20 000",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/bwx4cFsv/work-img-2.png",
      title: "Компоненты и запчасти",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "18 000",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/Y99PFr84/work-img-3.png",
      title: "Станки и оборудование",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "20 000",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="second__work-card">
      <div className="card-img">
        <img src={el.img} alt="img" />
      </div>
      <div className="card-items">
        <h3>{el.title}</h3>
        <p>{el.text}</p>
        <a href="#">{el.price}</a>
      </div>
    </div>
  ));
  return (
    <section className="second__work-section">
      <div className="container">
        <div className="second__work-content">
          <h1>Выполненные работы</h1>
          <p className="title__text">
            Мы собрали информацию по грузам, которые мы уже доставили. У нас
            специальный подход к каждому виду товаров.
          </p>
          <div className="second__work-cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Second__work;
