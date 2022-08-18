import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UN from "../assets/un.svg";

const CountryDetails = () => {
  const id = useParams().id;
  const [country, setCountry] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/api/countries/${id}`)
      .then((res) => res.json())
      .then((json) => setCountry(json));
    // setCountry()
  }, []);
  return (
    <div className="country__container">
      <h2>{country.name_official}</h2>
      <div>
        <img src={country.flag} alt={` ${country.name_official} flag`} />
        <img
          src={country.coat_arms}
          alt={`${country.name_official} Coat of Arms`}
        />
        <p className="d-inline">Un Member:</p>
        {country.un_member ? <img className="unMember" src={UN} /> : null}
      </div>
      <div>
        <h2>Official Name: {country.name_official}</h2>
        <h2>Common name: {country.name_common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Language: {country.language}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
