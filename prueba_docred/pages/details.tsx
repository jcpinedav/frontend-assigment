import { detailsStyles } from "@/components/deatails/Details-Styles";
import Footer from "@/components/general_use/footer/Footer";
import Navbar from "@/components/general_use/navbar/Navbar";
import VideoPlayer from "@/components/general_use/video/Video";
//importación librería date-fns para manejo de fecha y formatos
import { format } from "date-fns";
//Página de detlles, contiene el video, partes del video, título y resumen
const Details = () => {
  const currentDate = new Date();
  //se usa la fecha actual
  const formatoFecha = format(currentDate, "dd/MM/yyyy");
  const styles = detailsStyles();
  return (
    <div className={styles.mainContaincerDetails}>
      <div className={styles.externalMainData}>
        <div className={styles.mainDate}>
          <span>Fecha actual:{formatoFecha}</span>
        </div>
      </div>
      <Navbar />
      <VideoPlayer
        url={"https://www.youtube.com/embed/RFFHLuIKt9A?si=4-DVroz17B9Qf0OR"}
      />
      <Footer />
    </div>
  );
};

export default Details;
