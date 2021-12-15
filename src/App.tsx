import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CurrencyExchangeRate from "./pages/CurrencyExchangeRate";
import Menu from "./components/Menu";

function App() {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route
          path="/currency-exchange-rate"
          element={<CurrencyExchangeRate />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
