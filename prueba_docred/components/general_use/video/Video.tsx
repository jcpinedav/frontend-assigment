import React, { useEffect, useState } from "react";
import { videoStyles } from "./Video-Styles";
type VideoType = {
  url: string;
};
const VideoPlayer = ({ url }: VideoType) => {
  const [currentTime, setCurrentTime] = useState(0);

  const rise = () => {
    setCurrentTime(currentTime + 30);
  };

  const decrease = () => {
    setCurrentTime(currentTime - 30);
  };

  const styles = videoStyles();
  const startTime = 60;
  return (
    <div className={styles.mainContainerVideo}>
      <iframe
        width="560"
        height="315"
        src={`${url}?start=${currentTime}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={rise}>Adelantar</button>
      <button onClick={decrease}>Atrasar</button>
    </div>
  );
};

export default VideoPlayer;
