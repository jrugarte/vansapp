// Loader.js
import React from "react";
import "./Loader.css"; // Si deseas agregar estilos adicionales

// Asegúrate de poner la ruta correcta a tu archivo GIF
const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src="@src/public/images/giphyvan.gif"
        alt="Loading..."
        className="loader-gif"
      />
    </div>
  );
};

export default Loader;
// Ejemplo de uso en un componente
// import React, { useState, useEffect } from 'react';
// import Loader from './Loader';

// const MiComponente = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulando una llamada a la API
//     setTimeout(() => {
//       setData({ nombre: "Ejemplo de dato" });
//       setLoading(false);
//     }, 2000); // Espera de 2 segundos para mostrar la simulación
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return <div>{data ? data.nombre : "No hay datos"}</div>;
// };

// export default MiComponente;
