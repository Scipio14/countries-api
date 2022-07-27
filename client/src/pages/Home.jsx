import React from "react";
import { Link } from "react-router-dom";
import UN from "../assets/un.svg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Bienvenido a la API de Países </h1>
      <img className="home__image" src={UN} alt="Bandera de Naciones Unidas" />
      <div className="home__content">
        Esta página web sobre países nace como un ejercicio práctico para poder
        practicar la creación de una API y la aplicación de paginación en el
        lado del servidor. La idea es en una primera instancia el poder
        identificar a los países con sus banderas
      </div>
      <Link to="/countries" className="home__btn">
        Country List
      </Link>
    </div>
  );
};

export default Home;
