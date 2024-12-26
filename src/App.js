/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyApp from "./pages/PropertyApp";
import CabBooking from "./pages/CabBooking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy-policy/property-app" element={<PropertyApp />} />
        <Route path="/privacy-policy/cab-booking" element={<CabBooking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
