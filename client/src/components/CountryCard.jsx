import React from "react";
import UN from "../assets/un.svg";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/countries/${country.id}`}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title text-muted">
            Name: {country.name_official}
          </h2>
        </div>
        <div>
          <img
            className="card__image"
            src={country.flag}
            alt={`Bandera de ${country.name_official}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
