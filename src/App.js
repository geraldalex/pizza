import "./scss/app.scss";
import axios from "axios";

import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { useEffect, useState } from "react";
import {setPizzas } from "./redux/actions/pizzas"
import { useDispatch, useSelector } from "react-redux";

function App() {

const dispatch = useDispatch()



  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
       .then(({ data }) => dispatch(setPizzas(data.pizzas)))
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
