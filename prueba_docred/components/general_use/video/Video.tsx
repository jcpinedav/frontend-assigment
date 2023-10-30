import React, { useEffect, useState } from "react";
import { videoStyles } from "./Video-Styles";
import loremIpsum from "lorem-ipsum";
type VideoType = {
  url: string;
};
const VideoPlayer = ({ url }: VideoType) => {
  // const [currentTime, setCurrentTime] = useState(0);

  // const rise = () => {
  //   setCurrentTime(currentTime + 30);
  // };

  // const decrease = () => {
  //   setCurrentTime(currentTime - 30);
  // };

  const styles = videoStyles();
  const startTime = 60;
  const Resumen = `El COVID-19 es una enfermedad causada por el virus SARS-CoV-2. Se propaga principalmente a través de gotas respiratorias y puede provocar una amplia gama de síntomas, desde leves hasta graves. Los síntomas comunes incluyen fiebre, tos y dificultad para respirar. Se han implementado medidas de control en todo el mundo, como el distanciamiento social y las vacunas, para combatir su propagación. La pandemia de COVID-19 ha tenido un impacto significativo en la salud global y la economía.`;

  return (
    <div className={styles.mainContainerVideo}>
      <div className={styles.internalContainerVideo}>
        <div className={styles.FirstRow}>
          <iframe
            className={styles.ContainerVideo}
            // src={`${url}?start=${currentTime}`}
            src={`${url}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.buttomsContainerVideo}>
            <button className={styles.buttomsVideo}>
              Parte 1: Son 100% Cubanas
            </button>
            <button className={styles.buttomsVideo}>
              Parte 2: Son seguras
            </button>
            <button className={styles.buttomsVideo}>
              Parte 3: Se pueden actualizar
            </button>
            <button className={styles.buttomsVideo}>
              Parte 4: Son las más avanzadas en Latam
            </button>
            <button className={styles.buttomsVideo}>
              Parte 5: Entra las más avanzadas del mundo
            </button>
            <button className={styles.buttomsVideo}>
              Parte 6: Se desarrollan de forma cooperada
            </button>
            <button className={styles.buttomsVideo}>
              Parte 7: Legarán a toda Cuba en 2021
            </button>
          </div>
        </div>
        <span className={styles.nameVideo}>
          7 Datos sobre las vacunas cubanas contra la COVID-19 que debes conocer
        </span>
        <span className={styles.resumenVideo}>Resumen</span>

        <span className={styles.resumenContentVideo}>{Resumen}</span>
      </div>
      {/* <button onClick={rise}>Adelantar</button>
      <button onClick={decrease}>Atrasar</button> */}
    </div>
  );
};

export default VideoPlayer;
