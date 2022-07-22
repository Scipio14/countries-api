import React from "react";
import UN from "../assets/un.svg";

const Home = () => {
  return (
    <div className=" text-center mt-2">
      <h1>Bienvenido a la API de Países </h1>
      <img className="homeImage" src={UN} alt="Bandera de Naciones Unidas" />
    </div>
  );
};

export default Home;
