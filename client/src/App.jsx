import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:id" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
