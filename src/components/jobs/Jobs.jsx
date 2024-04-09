// import React from "react";

const jobs = () => {
  let data = [
    {
      id: 1,
      img: "https://i.postimg.cc/13hNJFJp/jobs-img-1.png",
      title: "Предложение от продавца",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/3Rckp0k0/jobs-img-2.png",
      title: "Доставка",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/SxhfjHFF/jobs-img-3.png",
      title: "Установка у клиента",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="jobs__card">
      <div className="jobs__card-child">
        <img src={el.img} alt="img" />
      </div>
      <div className="jobs__card-child">
        <h2>{el.title}</h2>
        <p>{el.text}</p>
      </div>
    </div>
  ));
  return (
    <section className="jobs-section">
      <div className="container">
        <div className="jobs__content">
          <h1>Этапы поставки </h1>
          <div className="jobs__cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default jobs;
