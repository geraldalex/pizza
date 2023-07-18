import "./scss/app.scss"

import {Home, Cart} from './pages';
import {Routes,Route } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <div className="wrapper">
<Header/>
      <div className="content">

      <Routes>
          <Route path="/" element={   <Home/> }/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
      </div>
    </div>
  );
}

export default App;
