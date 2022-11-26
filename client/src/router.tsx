import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { CountryPage } from "./pages/country";

export const AppRouter: FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:id" element={<CountryPage />} />
    </Routes>
  );
};
