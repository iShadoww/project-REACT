import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Convertidor.css";
import "./Formulario.css";
import "./Operaciones.css";

import Convertidor from "./Pages/Convertidor";
import Formulario from "./Pages/Formulario";
import Operaciones from "./Pages/Operaciones";

import Menu from "./components/menu";

export default function App() {
    return (<>
        <div className="app">
            <h1>"Bienvenido"</h1>
            <p>Jesus Adrian Tec Garrido  <strong>TI51BIS</strong> <i></i>.</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/Convertidor" element={<Convertidor />} />
                    <Route path="/Formulario" element={<Formulario />} />
                    <Route path="/Operaciones" element={<Operaciones />} />
                </Routes>

                <Menu />
            </BrowserRouter>
        </div>
    </>)
}