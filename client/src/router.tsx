import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { HomePage } from "./pages";
import { CountryPage } from "./pages/country";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="country/:id" element={<CountryPage />} />
    </>
  )
);
