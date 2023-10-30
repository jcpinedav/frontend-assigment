import { createUseStyles } from "react-jss"; //
//Estilos usados en el Home
export const homeStyles = createUseStyles({
  externalMainData: {
    maxWidth: "1000px",
    width: "100%",
    display: "flex",
    justifyContent: "start",
  },
  mainDate: {
    marginTop: "70px",
    color: "#000000",
    fontWeight: "bold",
    display: "flex",
  },
  mainContainerCards: {
    marginTop: "30px",
    marginBottom: "100px",
    maxWidth: "1000px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  mainContaincerHome: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
