
import './App.css';
import Mainpage from './Mainpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './Product';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>

      {/**Navbar  */}




      {/**Home  */}



      {   /**Footer  */}


    </div>
  );
}

export default App;
