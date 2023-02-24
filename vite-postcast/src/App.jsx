import { BrowserRouter, Route, Routes } from "react-router-dom"

import './styles/normalize.css';
import "./styles/globales.css";

import Inicio from "./components/inicio"
import Layout from "./components/layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
            path="/"
            element={<Layout pagina={'Inicio - Postcast'} />}
        >
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
