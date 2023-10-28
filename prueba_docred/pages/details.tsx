import { detailsStyles } from "@/components/deatails/Details-Styles";
import Footer from "@/components/general_use/footer/Footer";
import Navbar from "@/components/general_use/navbar/Navbar";
import VideoPlayer from "@/components/general_use/video/Video";

const Details = () => {
  const styles = detailsStyles();
  return (
    <div className={styles.mainContaincerDetails}>
      <Navbar />
      <VideoPlayer
        url={"https://www.youtube.com/embed/RFFHLuIKt9A?si=4-DVroz17B9Qf0OR"}
      />
      <Footer />
    </div>
  );
};

export default Details;
