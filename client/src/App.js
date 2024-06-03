import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./components/Pages/Contato";
import Enderecos from "./components/Pages/Endereco";
import SobreNos from "./components/Pages/SobreNos";
import Cardapio from "./components/Pages/Cardapio";
import Home from "./components/Pages/Home";
import Reserva from "./components/Pages/Reserva";

import Navbar from "./components/Layouts/Navbar";
import Container from "./components/Layouts/Container";
import Footer from "./components/Layouts/Footer";
import MenuForm from "./components/Forms/MenuForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<SobreNos />} />
          {/* <Route path="/fotos" element={<Fotos />} /> */}
          <Route path="/enderecos" element={<Enderecos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/menuForm" element={<MenuForm />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
