import "./scss/app.scss"

import {Home, Cart} from './pages';
import {Routes,Route } from "react-router-dom";
import { Header } from "./components";
import { useEffect, useState } from "react";

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => setPizzas(json.pizzas))
   } , [])


  return (
    <div className="wrapper">
<Header/>
      <div className="content">

      <Routes>
          <Route path="/" element={   <Home pizzas={pizzas}/> }/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
      </div>
    </div>
  );
}

export default App;
