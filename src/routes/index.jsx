import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Balconies from "../pages/Balconies";
import Cottages from "../pages/Cottages";
import Maintenance from "../pages/Maintenance";
import Prices from "../pages/Prices";
import Reviews from "../pages/Reviews"
import Contacts from "../pages/Сontacts"

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balconies" element={<Balconies />} />
          <Route path="/cottages" element={<Cottages />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
