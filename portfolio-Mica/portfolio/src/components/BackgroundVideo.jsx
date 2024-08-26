import React from "react";
import Boton from "./Boton";
//import "./BackgroundVideo.css"; // Asegúrate de tener el archivo de estilos

const BackgroundVideo = () => {
  return (
    <div className="video-background" data-aos="fade-down">
      <video autoPlay muted loop className="video-background__video">
        <source src="./video/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="contacto"></div>
      <div className="content">
        {/* Aquí puedes poner el contenido que quieras sobre el video */}

        <h1>My portfolio</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
