import React from "react";
import UN from "../assets/un.svg";

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title text-muted">Name: {country.name_official}</h2>
      </div>
      <div>
        <img
          className="card__image"
          src={country.flag}
          alt={`Bandera de ${country.name_official}`}
        />
        <img className="card__coat" src={country.coat_arms} alt="" />
        <div className="card-body">
          <p className="card-text">Capital: {country.capital}</p>
          <p className="d-inline">Un Member:</p>
          {country.un_member ? <img className="unMember" src={UN} /> : null}
          <p>Language: {country.language}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
