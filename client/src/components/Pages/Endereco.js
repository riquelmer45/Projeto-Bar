import React, { useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Endereco = () => {
  useEffect(() => {
    // Adiciona a classe 'enderecopage' ao body quando o componente Endereco montar
    document.body.classList.add("enderecopage");

    // Adiciona a div de overlay da Endereco apenas na página inicial (Endereco)
    if (window.location.pathname === "/endereco") {
      const overlayEnderecoDiv = document.createElement("div");
      overlayEnderecoDiv.classList.add("overlayEndereco");
      document.body.appendChild(overlayEnderecoDiv);
    }

    // Remove a classe 'enderecopage' do body quando o componente Endereco desmontar
    return () => {
      document.body.classList.remove("enderecopage");
      // Remove a div de overlay quando o componente Endereco desmontar
      const overlayEnderecoDiv = document.querySelector(".overlayEndereco");
      if (overlayEnderecoDiv) {
        overlayEnderecoDiv.remove();
      }
    };
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.7636155278333305,
    lng: -38.588664678223516,
  };

  return (
    <div>
      <h1>Endereco Page</h1>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {/* Adicione seus componentes de mapa aqui */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Endereco;
