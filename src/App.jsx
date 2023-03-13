import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import {Product} from "./pages/Product";
import { Carrito } from "./pages/Carrito";
import { Cafe } from "./componentes/Cafe";
import { Capuchino } from "./componentes/Capuchino";
import { CafeConLeche } from "./componentes/CafeConLeche";
import { CafeEspeciales } from "./componentes/CafeEspeciales";
import { Te } from "./componentes/Te";
import { FormularioCompra } from "./componentes/FormularioCompra";
import { FinalizarCompra } from "./pages/FinalizarCompra";

function App() {
  return (
    <HashRouter>
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/producto" element={<Product/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/cafe" element={<Cafe/>} />
        <Route path="/capuchino" element={<Capuchino/>} />
        <Route path="/cafeconleche" element={<CafeConLeche/>} />
        <Route path="/cafeespecial" element={<CafeEspeciales/>} />
        <Route path="/te" element={<Te/>} />
        <Route path="/formulariocompra" element={<FormularioCompra/>} />
        <Route path="/finalizarcompra" element={<FinalizarCompra/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
