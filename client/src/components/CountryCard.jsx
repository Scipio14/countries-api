import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="mt-3 col-lg-4 col-md-6">
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-header">
          <h2 className="card-title text-muted">
            Name: {country.name_official}
          </h2>
        </div>
        <div>
          <img
            className="card-img-top"
            src={country.flag}
            alt={`Bandera de ${country.name_official}`}
          />
          <img className="card-img-top mt-3" src={country.coat_arms} alt="" />
          <div className="card-body">
            <p className="card-text">Capital: {country.capital}</p>
            <p>Un Member: {country.un_member.toString()}</p>
            <p>Language: {country.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
