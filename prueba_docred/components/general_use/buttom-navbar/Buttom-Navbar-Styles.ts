import { createUseStyles } from "react-jss";
//Estilos usados en los botones del encabezado
export const buttomNavbarStyles = createUseStyles({
  mainButtomNavbar: {
    gap: "5px",
    height: "50px",
    border: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "100px",
    color: "#ffffff",
    background: "#000000",
    "& h4": {
      margin: "0px",
    },
    "&:hover": {
      background: "grey",
    },
  },
});
