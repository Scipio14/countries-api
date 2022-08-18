import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";

const CountriesList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/countries?page=${pageNumber}`)
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then(({ totalPages, results }) => {
        // console.log(totalPages, results);
        setNumberOfPages(totalPages);
        setCountries(results);
      });
  }, [pageNumber]);
  const goToNext = () => {
    setPageNumber(Math.min(numberOfPages, pageNumber + 1));
  };
  const goToPrevious = () => {
    setPageNumber(Math.max(1, pageNumber - 1));
  };

  return (
    <div className="country-list">
      <h2 className="text-center">Lista de países</h2>

      <h3 className="text-muted text-center">
        Página {pageNumber} de {numberOfPages}
      </h3>
      <div className="card-container">
        {countries.map((country) => (
          
          <CountryCard country={country} key={country.id} />
        ))}
      </div>
      <button onClick={goToPrevious}>Previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex + 1)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default CountriesList;
