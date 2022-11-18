
import { Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
