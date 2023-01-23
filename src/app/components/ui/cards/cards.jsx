import React from "react";
import { useSelector } from "react-redux";
import { getProjects } from "../../../store/projects";
import CardsList from "../../common/cards/cardsList/cardsList";
import "./cards.sass";

const Cards = () => {
  const { items } = useSelector(getProjects());

  return (
    <section className="cards">
      <div className="container-fluid">
        {items && <CardsList items={items} />}
      </div>
    </section>
  );
};

export default Cards;
